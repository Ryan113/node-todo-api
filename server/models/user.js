const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minglength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minglength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    }
  }]
});

module.exports = {User};

// var newUser = new User({
//   email: 'cat@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user: ' + doc);
// }, (e) => {
//   console.log('Unable to save user' + e);
// });
