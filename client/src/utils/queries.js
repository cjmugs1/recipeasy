// To match a front-end query with a back-end resolver, the query's fields and arguments must match the corresponding fields and arguments in the resolver function. For example, if a query asks for a user's name and email address, the resolver function must know how to retrieve that information from the data source and return it in the expected format.

import { gql } from "@apollo/client";

export const QUERY_ALL_RECIPES = gql`
  query getAllRecipes {
    allRecipes {
      _id
      name
      instructions
      description
      userId {
        _id
      }
      cookTime {
        amount
        unit
      }
      createdAt
      imageURL
      ingredients {
        name
        quantity
        unit
      }
      originalLanguage
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_RECIPE_BY_ID = gql`
  query getSingleRecipe($recipeId: ID!) {
    singleRecipe(recipeId: $recipeId) {
      _id
      name
      instructions
      description
      userId {
        _id
      }
      cookTime {
        amount
        unit
      }
      createdAt
      imageURL
      ingredients {
        name
        quantity
        unit
      }
      originalLanguage
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_SEARCH_RECIPE = gql`
  query searchRecipes($name: String, $username: String, $tags: [String]) {
    searchRecipes(name: $name, username: $username, tags: $tags) {
      name
      _id
      imageURL
      cookTime {
        amount
        unit
      }
      tags
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query getSingleUser($userId: ID!) {
    singleUser(userId: $userId) {
      username
      recipes {
        _id
        name
        instructions
        description
        userId {
          _id
        }
        cookTime {
          amount
          unit
        }
        createdAt
        imageURL
        ingredients {
          name
          quantity
          unit
        }
        originalLanguage
        tags {
          _id
          name
        }
      }
      _id
    }
  }
`;
