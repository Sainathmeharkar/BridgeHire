const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // <--- 1. NEW: Import the connection logic

dotenv.config();
// <--- 2. NEW: actually run the connection function
connectDB(); 

const app = express();

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
