const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});