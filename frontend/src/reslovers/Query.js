import { gql } from "apollo-boost";
import { perPage } from "../utils/constants";

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($where: ItemWhereInput = {}, $skip: Int = 0, $first: Int = ${perPage}) {
    items(where: $where, first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      tag
      description
      images {
        image
        largeImage
      }
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
      images {
        image
        largeImage
      }
      tag
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
      wishlist {
        item {
          id
          title
          description
          price
          images {
            image
            largeImage
          }
        }
      }
      cart {
        id
        quantity
        item {
          id
          title
          description
          price
          images {
            image
            largeImage
          }
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
      images {
        image
        largeImage
      }
      title
    }
  }
`;

export const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        images {
          image
          largeImage
        }
        quantity
      }
    }
  }
`;

export const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        description
        price
        images {
          image
          largeImage
        }
        quantity
      }
    }
  }
`;
