// user model

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    first_name: {
      type: String,
      required: 'Enter the first name of the user'
    },
    last_name: {
      type: String,
      required: 'Enter the last name of the user'
    }
});
module.exports = mongoose.model('User', userSchema);
