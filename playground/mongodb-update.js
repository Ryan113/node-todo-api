// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo database server');
  }
  console.log('Connected to mongo database server');

  const db = client.db('TodoApp');

  //findOneAndUpdate
  // icnrement age by one for user

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5bb012e2147c144c06d6c0cd')
  }, {
    $set: {
      name: 'Ryan'
    },
    $inc: {
      age: 1
    }
    }, {
      returnOrginal: false
    }).then((result) => {
    console.log(result);
  })

  // client.close();
});
