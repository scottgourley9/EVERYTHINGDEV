var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  cart: [{type: String, ref:"Product"}]

})

module.exports = mongoose.model("User", userSchema);
