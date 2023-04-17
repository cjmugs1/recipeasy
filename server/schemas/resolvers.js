// replace const for models 
// need query for User by name and ID and Recipes by name, ID and tag name
// need mutation for User: add, update, delete and Recipes: add, update, delete
// delete recipe from user's saved recipes array

const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    allUsers: async () => {
      return await User.find()
    },

    singleUser: async (parent, {userId}) => {
      console.log(userId)
      return await User.findOne({_id: userId}).populate('recipes')
    },

    allRecipes: async (parent, args) => {
      return await Recipe.find().populate('userId', 'tags')
    },

    singleRecipe: async (parent, {recipeId}) => {
      return await Recipe.findOne({_id: recipeId})
    },
    
    // for the main search page where users can search by username, tags, or name
    searchRecipes: async (parent, {username, tags, name}) => {
      // select params that were inputed
      const params = {}
      if (username) {
        params.user = username
      }

      if (tags) {
        params.tags = tags
      }

      if (name) {
        params.name = name
      }
      const recipes = await Recipe.find(params);
      console.log(recipes)
      return recipes
    },

  
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      
      // ------------
      // test purposes     
      const testUser = {
        name: "test",
        _id: "643079e4d34ddeec19b3d46f"
      }
      // ------------
      context.user = testUser
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(context.user._id, args, { new: true });
        console.log(updatedUser)
        return updatedUser
      }

      throw new AuthenticationError('Not logged in');
    },

    addRecipe: async (parent, args, context) => {
      // if (!context.user) {
      //   context.user = {
      //     _id: '6434d732607ad23c8ef32a5e',
      //     email: 'test@gmail.com'
      //   }
      // }
      console.log(context.user)
      const userId = context.user._id
        const recipe = await Recipe.create({...args});
        // console.log(recipe)
        const updatedUser = await User.findByIdAndUpdate(userId, { $push: { recipes: recipe } }, {new: true}).populate('recipes');
        
        return updatedUser;
      

    },

    // // args must have all the preexisting fields for this to work
    // updateRecipe: async (parent, args, context) => {

    //   // ------------
    //   // test purposes     
    //   const testUser = {
    //     name: "test",
    //     _id: "643079e4d34ddeec19b3d46f"
    //   }
    //   context.user = testUser
    //   // ------------

    //   if (context.user) {
    //     const userId = context.user._id

    //     console.log(args)
    //     // const updatedRecipe = await Recipe.findByIdAndUpdate(_id, 
    //     //   {

    //     //   }
    //     // )
    //   }

    // }

    removeRecipe: async (parent, {recipeId, chefId}, context) => {
      const testUser = {
        name: "test",
        _id: "643079e4d34ddeec19b3d46f"
      }
      context.user = testUser
      // ------------

     
      if (context.user) {
        const userId = context.user._id

        if (chefId === userId) {

          await Recipe.deleteOne({_id: recipeId})

          const updatedUser = await User.findOneAndUpdate({_id: userId}, {$pull: {recipe: {_id: recipeId}}}).populate('recipes')
          return updatedUser
        }
      }

    },   
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      try {
        const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log("signed in!")

      return { token, user };
      } catch(err) {
        console.log(err)
      }
      
    }
  }
};

module.exports = resolvers;
