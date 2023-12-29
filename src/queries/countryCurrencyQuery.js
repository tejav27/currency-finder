'use client'
import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql`
 query Countries {
   countries {
     code
     name
     emoji
   }
 }
`;

export const GET_CURRENCY_BY_COUNTRY = gql`
  query GetCurrency($countryName: String!) {
    item(
      where: { class_id: { _eq: "Country" }, nameEn: { _eq: $countryName } }
    ) {
      nameEn
      currency: statements(where: { property_id: { _eq: "currency" } }) {
        object {
          nameEn
        }
      }
    }
  }
`;

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    item(where: { class_id: { _eq: "Country" } }) {
      nameEn
      currency: statements(where: { property_id: { _eq: "currency" } }) {
        object {
          nameEn
        }
      }
    }
  }
`;
