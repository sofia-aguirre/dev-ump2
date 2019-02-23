const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Role = new Schema({
  roleId: {type: String},
  roleName: {type: String},
  perm1: {type: Boolean},
  perm2: {type: Boolean},
  perm3: {type: Boolean},
  perm4: {type: Boolean},
  perm5: {type: Boolean},
  perm6: {type: Boolean}
},
{
  collection: 'role'
});

module.exports = mongoose.model('Role', Role);