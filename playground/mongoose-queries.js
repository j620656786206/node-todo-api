const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '5b0823867dfa652e4c4b9eb9';
var userId = '5b071a9e6c07350168939fe9';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(todoId).then((todo) => {
  if(!todo) {
    return console.log('ID not found.');
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('user not found.');
  }
  console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));