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

const RecipeSchema = new mongoose.Schema({
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

  cookingTime: {
    type: Number,
    required: true,
  },
  tags: [{type: String}], //[recipeTagSchema],
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserName',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    },
  });

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
