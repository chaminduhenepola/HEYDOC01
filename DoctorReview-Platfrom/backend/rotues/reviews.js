const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Random anonymous name generator
function generateAnonymousName() {
  const names = ['Eagle123', 'TigerFox', 'SilentWolf', 'GhostRider', 'BlueWhale'];
  return names[Math.floor(Math.random() * names.length)];
}

router.post('/', async (req, res) => {
  const { comment } = req.body;

  try {
    const newReview = new Review({
      name: generateAnonymousName(),
      comment,
      createdAt: new Date(),
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save review' });
  }
});

router.get('/', async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
});

module.exports = router;
