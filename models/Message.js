const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
  ok: Boolean,
  message: String, // String is shorthand for {type: String}
});

MessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  

module.exports = mongoose.model('Message', MessageSchema)