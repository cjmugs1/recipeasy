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

  const createdUsers = await User.find()

  // create recipe tags and then get all of them from the database with the _id field now populated
  await createRecipeTag(30).then(async (recipeTags) => {
    await RecipeTag.collection.insertMany(recipeTags)
  });

  const createdRecipeTags = await RecipeTag.find()
  
  // now that we have the users and recipe tags in our db, we can create recipes
  await createRecipe(createdUsers, createdRecipeTags, 2).then(async (recipes) => {
    await Recipe.collection.insertMany(recipes)
  });

  const createdRecipes = await Recipe.find()
  const createdRecipesAndTags = await Recipe.find({}, {tags: 1})

  const putIds = async(recipes) => {
    for (let i=0; i < recipes.length; i++){
      // console.log(recipes[i])
      // for (let j=0; j < recipes[i].tags.length; j++){
      //   let user = await RecipeTag.findOneAndUpdate(
      //     { _id: recipes[i].tags[j]._id },
      //     { $push: { recipes: recipes[i]._id } },
      //     { new: true }
      //   )
      // }

      await User.findOneAndUpdate(
        { _id: recipes[i].userId },
        { $push: { recipes: recipes[i]._id } },
        { new: true }
      )
    }
  }

  await putIds(createdRecipes);

  console.log("Seeding Complete!")
  process.exit();
});
