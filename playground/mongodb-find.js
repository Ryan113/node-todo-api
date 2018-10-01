// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo database server');
  }
  console.log('Connected to mongo database server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5baff7a62e7d634a88088280')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch ToDos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ' + count);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch ToDos');
  // });

  db.collection('Users').find({name: 'Ryan'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch ToDos');
  });

  // client.close();
});
