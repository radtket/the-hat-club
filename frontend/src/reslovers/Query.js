import { gql } from "apollo-boost";
import { perPage } from "../utils/constants";

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export const GET_SINGLE_ITEM_QUERY = gql`
  query GET_SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

export const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

export const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    isCartOpen @client
  }
`;

export const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;
