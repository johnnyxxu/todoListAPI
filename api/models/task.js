
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var taskSchema = new schema({
    name: {
      type: String,
      required: 'Enter name of the task please'
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [
        {
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }
      ],
      default: ['pending']
    }
});
module.exports = mongoose.model('Task', taskSchema);
