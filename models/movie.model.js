const mongoose = require('mongoose');
const DEFAULT_COVER = "https://images-na.ssl-images-amazon.com/images/I/61%2BSliU8TLL._SY355_.jpg"; 

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  celebrity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Celebrity'
  },
  cover: {
    type: String,
    default: DEFAULT_COVER
  }
}, {
  timestamps: true
});

schema.pre('save', function(next) {
 
  this.cover ? this.cover : this.cover = DEFAULT_COVER;
  next();
});

module.exports = mongoose.model('Movie', schema);