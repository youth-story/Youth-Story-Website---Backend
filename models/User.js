const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    requierd: true,
    default: 'User'
  },
  dp: {
    type: String,
    default: ''
  },
  mode: {
    type: Boolean,
    default: 0,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);