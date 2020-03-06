const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  details: {
    description: {
      type: String
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard']
    },
    serving: {
      type: String
    },
    prep_time: {
      type: String
    },
    cook_time: {
      type: String
    }
  },
  ingredients: {
    type: Array,
    default: []
  },
  steps: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
