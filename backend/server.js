const express = require('express')
const dotenv = require('dotenv')
// const socketIO = require('socket.io')
const mongoose = require('mongoose')
const messageModel = require('./models/messageModel')
const http = require('http')
const cors = require('cors')
const socketIO = require('socket.io');


const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.json())
app.use(cors())


app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)


const mongooseURI = 'mongodb+srv://emekasan:nnaemeka981222100@emekacluster.jagnfxo.mongodb.net/test'

mongoose
  .connect(mongooseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err)
  })

// API routes
app.get('/', (req, res) => {
    res.status(200).send('API is running')
})
app.get('/messages/sync', (req, res) => {
  const messageCollection = mongoose.connection.collection('messageContent')
  messageCollection.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// app.get('/messages/sync', async (req, res) => {
//   try {
//     const data = await messageModel.find()
//     res.status(200).send(data)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

app.post('/messages/new', (req, res) => {
  const { username, message } = req.body
const messageCollection = mongoose.connection.collection('messageContent')

  // Insert the chat into the database
  messageCollection.insertOne({ username, message }, (err, result) => {
    if (err) {
      console.error('Failed to insert chat:', err)
      res.status(500).send('Failed to create chat')
      return
    }

    const chat = { username, message }
    io.emit('chat message', chat) // Emit the chat message to all connected clients

    res.status(201).send(result)
  })
})




app.listen(5000, console.log(`server running on port ${PORT}`))