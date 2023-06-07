const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  {
    message: String,
    username: String,
    timestamp: String, 
    received: Boolean, 
  },
)

const Message = mongoose.model('messageContent', messageSchema)
module.exports = Message
