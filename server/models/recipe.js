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

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unit: String,
    },
  ],
  instructions: [String],
  imageURl: String,
  cookingTime: {
    type: Number,
    required: true,
  },
  tags:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RecipeTag',
    },
  ],
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
