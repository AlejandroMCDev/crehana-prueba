import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      code
      emoji
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      capital
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
