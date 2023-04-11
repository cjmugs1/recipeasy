//after building resolvers, match them to the typeDefs
// add definitions for each model
// make sure to keep Auth resolver

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    name: String
    email: String
    password: String
    recipes: [Recipe]
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
  
  type CookingTime {
    amount: String
    unit: String
  }

  type Recipe {
    _id: ID
    userId: User
    name: String
    description: String
    ingredients: [Ingredient]
    instructions: [String]
    imageURL: String
    cookingTime: CookingTime
    tags: [String]
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  input IngredientInput {
    name: String
    quantity: String
    unit: String
  }

  input TimeInput {
    amount: String
    unit: String
  }

  type Query {
    allUsers: [User]
    singleUser(userId: ID!): User
    allRecipes: [Recipe]
    singleRecipe(recipeId: ID!): Recipe
    searchRecipes(username: String, name: String, tags: [String]): Recipe
  }

  type Mutation {
    addUser(
      name: String!, 
      username: String, 
      email: String!, 
      password: String!
    ): Auth
    
    updateUser(
      name: String, 
      username: String, 
      email: String, 
      password: String
    ): User
    
    addRecipe(
      userId: ID!,
      name: String!, 
      description: String!, 
      ingredients: [IngredientInput]!, 
      instructions: [String]!, 
      cookingTime: TimeInput!, 
      imageURL: String, 
      tags: [String]
    ): User
    
    updateRecipe(
      recipeId: ID!, 
      name: String, 
      description: 
      String, 
      ingredients: [String], 
      instructions: [String], 
      cookingTime: String,  
      imageURL: String, 
      tags: [String]
    ): Recipe

    removeRecipe(
      recipeId: ID!, 
      chefId: ID!
    ): User
    
    login(
      email: String!, 
      password: String!
    ): Auth

  }
`;

module.exports = typeDefs;
