# Currency Finder App

This application allows users to find the currency of different countries. It utilizes Next.js for the frontend, Chakra UI for styling, and Apollo Client for GraphQL queries.

## Features

- Select a country from the dropdown list.
- Fetch and display the currency of the selected country.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/tejav27/currency-finder
   ```
2. Navigate to the project directory:
   ```
   cd currency-finder
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- Next.js
- Chakra UI
- Apollo Client
- GraphQL

## Folder Structure

- `pages/`: Next.js pages
- `components/`: Reusable Chakra UI components
- `apollo/`: Apollo Client configuration and queries
- `styles/`: Global styles and theme configurations

## Further Improvements with more time

- **Error Handling**: Implement comprehensive error handling and user feedback for failed GraphQL queries.
- **Error Messages**: Display user-friendly error messages for failed requests or invalid input.
- **UI/UX Enhancements**: Add animations, loading indicators, and improved user feedback for a better user experience.
- **Caching**: Implement caching strategies to store previously fetched data and improve performance.
- **API Calls Optimisation**: Minimize the number of API calls and optimize data fetching by consolidating currency and country information into a single API request.

