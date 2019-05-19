const User = require('../models/user.js')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email'}, function(email, password, done) {
      User.findOne(({ email: email }), function (err, user) {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: 'Incorrect email address.' });
      } else {
        bcrypt.compare(password, user.password, function(err, isMatched) {
          if (err) throw err
          if (isMatched) {
            return done(null, user)
          } else {
            return done(null, false, { message: 'Incorrect password.' })
          }
        })
        return done(null, user);
      };
    });
  }));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
