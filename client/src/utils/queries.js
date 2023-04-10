// To match a front-end query with a back-end resolver, the query's fields and arguments must match the corresponding fields and arguments in the resolver function. For example, if a query asks for a user's name and email address, the resolver function must know how to retrieve that information from the data source and return it in the expected format.

import { gql } from '@apollo/client';

export const QUERY_ALL_RECIPES = gql`
  {
    recipes {
      _id
      name
      description
      ingredients
      instructions
      imageURL
      tags
      username
      createdAt
    }
  }
`;

export const QUERY_RECIPE = gql`
  query getSingleRecipe($recipe: ID) {
    recipe {
      _id
      name
      description
      ingredients
      instructions
      imageURL
      tags
      username
      createdAt
      }
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

export const QUERY_USER = gql`
  {
    user {
      name
      email
      languages
      recipes {
        _id
      }
    }
  }
`;
