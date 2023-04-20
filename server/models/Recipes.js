const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const IngredientSchema = new mongoose.Schema({
  quantity: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  name: {
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
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RecipeTag",
    },
  ],
  originalLanguage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
