const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  password2: String,
}, {timestamps: true});

const User  = mongoose.model('User', UserSchema);
module.exports = User
