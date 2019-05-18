// load in evironment variables
require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser')
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const flash = require('express-flash');
const app = express();


// DB Config
const db = process.env.MONGO_DB_URL

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// set static folder
app.use(express.static(path.join(__dirname, '/public')));

// ejs setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Flash setup
app.use(cookieParser('secret'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

// Global variables to  be used in templates
app.use(function(req, res, next) {
  res.locals.signupMessage = req.flash('signupMessage');
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// // Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use('/listings', require('./routes/listings.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
