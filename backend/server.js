const express = require('express')
const dotenv = require('dotenv')
// const socketIO = require('socket.io')
const mongoose = require('mongoose')
const messageModel = require('./models/messageModel')
// const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()

app.use(express.json())

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


app.get('/', (req, res) => {
    res.status(200).send('API is running')
})

app.post('/chats', async (req, res) => {
  const dbMessage = req.body 

try {
  const data = await messageModel.create(dbMessage);
  res.status(201).send(data);
} catch (err) {
  res.status(500).send(err);
}

  
})




app.listen(5000, console.log(`server running on port ${PORT}`))