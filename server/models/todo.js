const mongoose = require('mongoose');

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

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Do the thing',
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
