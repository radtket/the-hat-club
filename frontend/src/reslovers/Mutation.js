import { gql } from "apollo-boost";

export const ITEM_WISHLIST_TOGGLE_MUTATION = gql`
  mutation ITEM_WISHLIST_TOGGLE_MUTATION($id: ID!) {
    toggleItemToWishlist(id: $id) {
      id
    }
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $tag: String!
    $images: ImageCreateManyInput
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      tag: $tag
      images: $images
    ) {
      id
      title
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $tag: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      tag: $tag
      description: $description
      price: $price
    ) {
      id
      title
      tag
      description
      price
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
      title
    }
  }
`;

export const USER_SIGNUP_MUTATION = gql`
  mutation USER_SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const USER_SIGNIN_MUTATION = gql`
  mutation USER_SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const USER_LOGOUT_MUTATION = gql`
  mutation USER_LOGOUT_MUTATION {
    logout {
      message
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

export const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission]
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

export const TOGGLE_CART_MUTATION = gql`
  mutation TOGGLE_CART_MUTATION {
    toggleCart @client
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $quantity: Int = 0) {
    addToCart(id: $id, quantity: $quantity) {
      id
      quantity
    }
  }
`;

export const REMOVE_ITEM_FROM_CART_MUTATION = gql`
  mutation REMOVE_ITEM_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

export const UPDATE_CART_ITEM_QUANITY_MUTATION = gql`
  mutation UPDATE_CART_ITEM_QUANITY_MUTATION($id: ID!, $quantity: Int!) {
    updateCartItem(where: { id: $id }, data: { quantity: $quantity }) {
      id
    }
  }
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;
