const mongoose = require('mongoose');

// lecture 70 talks about this promise
mongoose.Promise = global.Promise;
// lecture 80 //process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};
