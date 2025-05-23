const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  createdAt: Date,
});

module.exports = mongoose.model('Review', ReviewSchema);
