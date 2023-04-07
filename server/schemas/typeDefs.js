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
    tags: [RecipeTag]
    username: String
    createdAt: Date
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
