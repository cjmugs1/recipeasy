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
    cookingTime: Number
    tags: [String]
    username: String
    createdAt: Date
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    thisUser(userId: ID!): User
    recipes(username: String, name: String, tags: [String]): Recipe
    oneRecipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(name: String!, username: String!, email: String!, password: String!): Auth
    updateUser(name: String, username: String, email: String, password: String): User
    addRecipe(name: String!, description: String!, ingredients: [String]!, instructions: String!, cookingTime: Number!, username: String!, imageURL: String, tags: [String], createdAt: Date!): Recipe
    updateRecipe(_id: ID!, name: String, description: String, ingredients: [String], instructions: String, cookingTime: Number,  imageURL: String, tags: [String]): Product
    removeRecipe(_id: ID!)
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
