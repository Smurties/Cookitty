const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
var path = require('path');

// Define static file locations
app.use(express.static('docs'));

// Display Docs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/docs/index.html'));
});

// Body Parser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
  });

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/recipes', require('./routes/api/recipes'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
