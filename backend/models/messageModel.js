const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  {
    message: String,
    name: String,
    timestamp: String, 
    received: Boolean, 
  },
)

const Message = mongoose.model('messageContent', messageSchema)
module.exports = Message
