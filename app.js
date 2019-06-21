const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

require('newrelic');
const users = require("./routes/api/users");
const questions = require("./routes/api/questions");
const answers = require("./routes/api/answers");
// const User = require('./models/User');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch(err => console.log(err));

// this line is not totally necessary
app.get("/",(req,res) => res.send("Social-Q's"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/questions", questions);
app.use("/api/answers", answers);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
