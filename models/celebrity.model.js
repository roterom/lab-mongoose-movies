const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    default: "unkonwn"
  },
  catchPhrase: {
    type: String,
    required: true
  }
}, {
  timestamps: true
  
});

module.exports = mongoose.model('Celebrity', schema);