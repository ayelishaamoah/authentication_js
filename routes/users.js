const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user.js')
const { check, validationResult } = require('express-validator/check');

router.post('/register', [
  check('first_name').not().isEmpty().withMessage("Please enter First Name"),
  check('last_name').not().isEmpty().withMessage("Please enter Last Name"),
  check('email').isEmail().withMessage("Please enter Email"),
  check('password').not().isEmpty().withMessage("Please enter Password"),
  check('password').custom((value, { req }) => {
  if (value !== req.body.password2) {
    throw new Error('Password confirmation does not match password');
  } return true;
}),
  check('password2').not().isEmpty().withMessage("Please confirm password"),
], (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  const errorList = validationResult(req).array();
  const { first_name, last_name, email, password, password2 } = req.body;

  if (!errors.isEmpty()) {
     res.render('homepage', {
      errorList,
      first_name,
      last_name,
      email,
      password,
      password2
    })
  } else {
    console.log("Success")
    const newUser = new User({
      first_name,
      last_name,
      email,
      password
    });

    // hash password using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) throw err
          // Store hash in your password DB.
          newUser.password = hash
          // save new user instance with hashed password
          newUser.save()
          .then(user => {
            req.flash('signupMessage', "You have signed up");
            res.redirect('/users/login')
          })
          .catch(err => console.log(err))
      });
    });
  }
});

//login page
router.get('/login', (req,res) => {
  res.render('login')
});

// login
router.post('/login',
  passport.authenticate('local', {
  successRedirect: '/users/listings',
  failureRedirect: '/login',
  failureFlash: true })
);

router.get('/listings', (req,res) => {
  res.render('listings')
});

module.exports = router;
