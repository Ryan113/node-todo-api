const mongoose = require('mongoose');

// lecture 70 talks about this promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// lecture 71
const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minglength: 1,
    trim: true
  },
  completed : {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Do the thing',
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });


// new User model
// email property - require it - trim - type string - set type - set ming length of 1
const User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minglength: 1
  }
});

var newUser = new User({
  email: 'cat@gmail.com      '
});

newUser.save().then((doc) => {
  console.log('Saved user: ' + doc);
}, (e) => {
  console.log('Unable to save user' + e);
});
