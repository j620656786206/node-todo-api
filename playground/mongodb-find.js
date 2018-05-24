// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  } 

  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({ 
  //   _id: new ObjectID('5b06ea6b9c08194b2cfcf04a') 
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todo Count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });

  db.collection('Users').find({ name: 'Alex' }).toArray().then((user) => {
    console.log('Todos');
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  });

  client.close();
});
