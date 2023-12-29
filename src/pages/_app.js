import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import styles from '../styles/globals.css';

export const metadata = {
  title: 'Currency Finder',
  description: 'Finds the currency of different countries',
}

function MyApp({ Component, pageProps }) {
 return (
   <ApolloProvider client={client}>
     <Component {...pageProps} />
   </ApolloProvider>
 );
}

export default MyApp;
