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
const recipeTagSchema = require('./RecipeTag')

const TimeSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true
  }
})

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});


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
  ingredients: [IngredientSchema],
  instructions: [String],
  imageURL: String,
  cookTime: TimeSchema,
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecipeTag'
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
