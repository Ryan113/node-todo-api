const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6bbbd3b5044ed5e5e702d2bd11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('Todos: ' + todos);
// });
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log('Todos: ' + todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By Id: ' + todo);
// }).catch((e) => {
//   console.log(e);
// });

// find user by id
// if not found
// if found
// handle any error
var id = '5bb2aff8dd68195af1c27dbe';

User.findById(id).then((user) => {
  if (!user) {
      console.log("User not found!");
  }
  console.log("User: " + user);
}).catch((e) => {
  console.log(e);
});
