const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minglength: 1
  }
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
