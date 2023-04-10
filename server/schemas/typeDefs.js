//after building resolvers, match them to the typeDefs
// add definitions for each model
// make sure to keep Auth resolver

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    name: String
    email: String
    password: String
    userRecipes: [Recipe]
  }

  type RecipeTag {
    _id: ID
    name: String
  }

  type Ingredient {
    name: String
    quantity: String
    unit: String
  }

  type Recipe {
    _id: ID
    name: String
    description: String
    ingredients: [Ingredient]
    instructions: [String]
    imageURL: String
    cookingTime: String
    tags: [String]
    username: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    allUsers: [User]
    singleUser(userId: ID!): User
    allRecipes: [Recipe]
    singleRecipe(recipeId: ID!): Recipe
    searchRecipes(username: String, name: String, tags: [String]): Recipe
  }

  type Mutation {
    addUser(name: String!, username: String!, email: String!, password: String!): Auth
    updateUser(name: String, username: String, email: String, password: String): User
    addRecipe(name: String!, description: String!, ingredients: [String]!, instructions: String!, cookingTime: String!, username: String!, imageURL: String, tags: [String], createdAt: String!): Recipe
    updateRecipe(_id: ID!, name: String, description: String, ingredients: [String], instructions: String, cookingTime: String,  imageURL: String, tags: [String]): Recipe
    removeRecipe(_id: ID!, userId: ID!): User
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
