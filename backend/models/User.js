const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  shopping_list: {
    type: Array,
    default: []
  },
  forks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'recipe'
    }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);
