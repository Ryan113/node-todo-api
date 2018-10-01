// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// destructuring Object

// const obj = new ObjectID();
// console.log(obj);

// const user = {name: 'ryan', age: 25};
// const {name} = user;
// console.log(name);

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo database server');
  }
  console.log('Connected to mongo database server');
  const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: 'Ryan',
    age: 30,
    location: 'beautifullonghair.com'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert Todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // insert new doc into Users (name, age, location
  // const db = client.db('Users');
  //
  // db.collection('Users').insertOne({
  //   name: 'Ryan',
  //   age: 30,
  //   location: 'beautifullonghair.com'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert into User', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });


  client.close();
});
