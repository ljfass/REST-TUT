const express = require('express');
const app = express();
const postRouter = require('./routes/posts');
const mongoose = require('mongoose');
const config = require('./setup/keyes');
const bodyParser = require('body-parser');

// Handle static files
app.use(express.static(__dirname + '/public'))

// Connect to db

mongoose.connect(config.dbUri, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db successfully');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ROUTES
app.use('/posts', postRouter);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});