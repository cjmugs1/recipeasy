import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $username: String!, $email: String!, $password: String!) {
  addUser(name: $name, username: $username, email: $email, password: $password) {
    token
    user {
      _id
    }

  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($name: String, $username: String, $email: String, $password: String) {
  updateUser(name: $name, username: $username, email: $email, password: $password) {
    _id
    email
    name
    username
  }
}
`;

export const ADD_RECIPE = gql`
mutation addRecipe($userId: ID!, $name: String!, $description: String!, $ingredients: [IngredientInput]!, $instructions: [String]!, $cookingTime: TimeInput!) {
  addRecipe(userId: $userId, name: $name, description: $description, ingredients: $ingredients, instructions: $instructions, cookingTime: $cookingTime) {
    username,
    recipes {
      name
      instructions
      ingredients {
        quantity
        unit
        name
      }
      cookingTime{
        amount
        unit
      }
      createdAt
      description
    }
  }
}
`;

export const REMOVE_RECIPE = gql`
mutation RemoveRecipe($recipeId: ID!, $chefId: ID!) {
  removeRecipe(recipeId: $recipeId, chefId: $chefId) {
    recipes {
      name
    }
  }
}
`