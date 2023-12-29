'use client'
import {
  Select,
  Container,
  Button,
  Text,
  HStack,
  VStack,
  Box,
  extendTheme,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import client from '../apollo/client';
import { GET_CURRENCY_BY_COUNTRY, GET_ALL_COUNTRIES } from '../queries/countryCurrencyQuery';

export const metadata = {
  title: 'Currency Finder',
  description: 'Finds the currency of different countries',
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#b9d7c9",
        components: {
          Select: {
            variants: {
              custom: (props) => ({
                field: {
                  _focus: {
                    borderColor: "red.500",
                  },
                },
                listBox: {
                  bg: "blue.500", 
                },
              }),
            },
          },
        },
      },
    },
  },
});

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const handleCountrySelection = (chosenCountry) => {
    setSelectedCountry(chosenCountry);

    setCurrency("");
  };

  const handleSearch = () => {
    const selectedData = allCountries.find(
      (data) => data.name === selectedCountry
    );
     fetchCurrencyByCountry(selectedCountry);
  };

  async function fetchCurrencyByCountry(selectedCountry) {
    try {
      const response = await client.query({
        query: GET_CURRENCY_BY_COUNTRY,
        variables: { countryName: selectedCountry },
      });
      setCurrency(
        response.data?.item[0].currency[0].object.nameEn || "Not found"
      );
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  async function fetchAllCountries() {
    try {
      const response = await client.query({ query: GET_ALL_COUNTRIES });
      const countriesNames = response.data.item.map((item) => item.nameEn);
      setAllCountries(countriesNames);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW="container.sm"
        mt={10}
        p={5}
        boxShadow="md"
        rounded="lg"
        bg="white"
        border={"black 2px"}
      >
        <Box className="main-card">
          <VStack spacing={6} align="center" w="full" mb={6}>
            <Heading as="h1" size="xl" textAlign="center">
              Select Country
            </Heading>
            <HStack spacing={4} align="center" w="full">
              <Select
                w="full"
                align="center"
                placeholder="Select country"
                value={selectedCountry}
                onChange={(e) => handleCountrySelection(e.target.value)}
                isSearchable
                variant="filled"
              >
                {allCountries.map((data) => (
                  <option
                    key={data}
                    value={data}
                    style={{ background: "yellow" }}
                  >
                    {data}
                  </option>
                ))}
              </Select>
              <Button
                colorScheme="teal"
                onClick={handleSearch}
                w="full"
                align="center"
              >
                Find Currency
              </Button>
            </HStack>
            <Flex align="center" justify="space-between">
              <dt style={{ fontWeight: "bold" }}>Currency:</dt>
              <dd>{currency}</dd>
            </Flex>
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
}