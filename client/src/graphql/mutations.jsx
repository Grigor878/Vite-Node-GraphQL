import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($name, $username, $password) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $username, $oldPassword, $newPassword
  ) {
    updatePassword(
      username: $username
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id) {
    deleteUser(id: $id) {
      message
    }
  }
`;
