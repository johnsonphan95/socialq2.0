const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const questions = require("./routes/api/questions");
const User = require('./models/User');

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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
