const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  phoneNum: {type: String},
  email: {type: String}
},
{
  collection: 'user'
});

module.exports = mongoose.model('User', User);