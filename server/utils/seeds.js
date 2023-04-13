const db = require('../config/connection');
const { User, RecipeTag, Recipe } = require('../models');
const { createUser, createRecipeTag, createRecipe } = require('./dataGenerator');

db.once('open', async () => {
  // clear the db
  await RecipeTag.deleteMany();
  await Recipe.deleteMany();
  await User.deleteMany();
  
  // create users and then get all of them from the database with the _id field now populated
  await createUser(20).then(async (users) => {
    // this is the mongoDB syntax for inserting multiple documents into a collection, should we be using this instead of the mongoose syntax?
    await User.collection.insertMany(users)
  });

  let createdUsers = await User.find()

  // create recipe tags and then get all of them from the database with the _id field now populated
  await createRecipeTag(30).then(async (recipeTags) => {
    await RecipeTag.collection.insertMany(recipeTags)
  });

  let createdRecipeTags = await RecipeTag.find()
  
  // now that we have the users and recipe tags in our db, we can create recipes
  await createRecipe(createdUsers, createdRecipeTags, 2).then(async (recipes) => {
    await Recipe.collection.insertMany(recipes)
  });
  
  const recipeTags = await RecipeTags.insertMany([
    { name: 'American' },      // Tag 0 in array index
    { name: 'BBQ' },           // Tag 1 in array index
    { name: 'Breakfast' },     // Tag 2 in array index
    { name: 'Chinese' },       // Tag 3 in array index
    { name: 'Dessert' },       // Tag 4 in array index
    { name: 'French' },        // Tag 5 in array index
    { name: 'Greek' },         // Tag 6 in array index
    { name: 'Indian' },        // Tag 7 in array index
    { name: 'Italian' },       // Tag 8 in array index
    { name: 'Japanese' },      // Tag 9 in array index
    { name: 'Korean' },        // Tag 10 in array index
    { name: 'Mediterranean' }, // Tag 11 in array index
    { name: 'Mexican' },       // Tag 12 in array index
    { name: 'Middle Eastern' },// Tag 13 in array index
    { name: 'Seafood' },       // Tag 14 in array index
    { name: 'Snacks' },        // Tag 15 in array index
    { name: 'Soups' },         // Tag 16 in array index
    { name: 'Thai' },          // Tag 17 in array index
    { name: 'Vegan' },         // Tag 18 in array index
    { name: 'Vegetarian' },    // Tag 19 in array index
  ]);
  
  process.exit();
});
