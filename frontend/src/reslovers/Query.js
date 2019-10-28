import { gql } from "apollo-boost";

const perPage = parseInt(process.env.REACT_APP_PAGINATION_PER_PAGE, 10);
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
