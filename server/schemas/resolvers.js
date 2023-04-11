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

    allRecipes: async (parent, {recipeId}) => {
      return await Recipe.find()
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
      
      return await Recipe.find(params)
    },

    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
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

      // ------------
      // test purposes     
      const testUser = {
        name: "test",
        _id: "643079e4d34ddeec19b3d46f"
      }
      // ------------

      context.user = testUser
      if (context.user) {
        const userId = context.user._id
        // console.log(args)
        const recipe = await Recipe.create({...args, userId});
        console.log(recipe)
        const updatedUser = await User.findByIdAndUpdate(userId, { $push: { recipes: recipe } }, {new: true}).populate('recipes');
        console.log(updatedUser)
        return updatedUser;
      }

      throw new AuthenticationError('Not logged in');
    },
    
//     updateProduct: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     }
  }
};

module.exports = resolvers;
