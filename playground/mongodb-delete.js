// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  } 
  const db = client.db('TodoApp');
  console.log('connecting to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ name: 'Alex' });

  db.collection('Users').findOneAndDelete({ 
    _id: new ObjectID("5b06e5cb8496da287cd5d09a") 
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close();
});
