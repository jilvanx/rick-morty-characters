import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query character($page: Int!, $filter: String!) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        image
        species
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      location {
        id
        name
      }
      origin {
        id
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;
