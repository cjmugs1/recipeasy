// add cuisine tags to reference in recipe model

const mongoose = require('mongoose');

const RecipeTagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const RecipeTag = mongoose.model('RecipeTag', RecipeTagSchema);

module.exports = RecipeTag;
