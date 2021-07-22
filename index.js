const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// .env Access
dotenv.config();

// Express Setup + Cors + Cookie Parser
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://city-weather-today.herokuapp.com',
      'https://myweather.city',
    ],
    credentials: true,
  })
);
app.use(cookieParser());

// Port Access
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Testing Initial Connection
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Router Setup
app.use('/auth', require('./routers/userRouter'));

// Connect to MongoDB
mongoose.connect(
  process.env.MDB_CONNECT_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log('Connected to MongoDB');
  }
);
