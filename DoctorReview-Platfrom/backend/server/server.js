// 🔹 Anonymous Review Schema 🔹
const ReviewSchema = new mongoose.Schema({
  name: String,      // 🔹 This is the random anonymous name like "Wolf#321"
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', ReviewSchema);

// 🔹 Anonymous Review Endpoints 🔹
app.get('/api/reviews', async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
});

app.post('/api/reviews', async (req, res) => {
  const { comment } = req.body;
  const animals = ['Tiger', 'Panda', 'Koala', 'Wolf', 'Eagle'];
  const name = `${animals[Math.floor(Math.random() * animals.length)]}#${Math.floor(Math.random() * 1000)}`;

  const newReview = new Review({ name, comment });
  await newReview.save();
  res.status(201).json(newReview);
});
