const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 12,
};

// jwt.io
// decode
var token = jwt.sign(data, '123abc');
console.log(token);

// decode
var decoded = jwt.verify(token, '123abc');
console.log('Decoded: ' + JSON.stringify(decoded));

// var message = 'I am user number 5';
// var hash = SHA256(message).toString();
//
// console.log('Mesage: ' + message);
// console.log('Hash:' + hash);
//
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Date was not changed');
// } else {
//   console.log('Data was changed do not trust');
// }
