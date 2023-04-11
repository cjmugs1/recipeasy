// add creationDate (timestamp)
// add prep/cook time
// add description
// ingredients array
// steps array
// add photo field
// userID
// category tag array imported from new schema
// original language
// -------------------------------

const mongoose = require('mongoose');
const ingredientSchema = require('./Ingredient')
const recipeTagSchema = require('./RecipeTag')

const timeSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true
  }
})

const RecipeSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
  instructions: [String],
  imageURL: String,
  cookingTime: timeSchema,
  tags: [{type: String}], //[recipeTagSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
    },
  });


const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
