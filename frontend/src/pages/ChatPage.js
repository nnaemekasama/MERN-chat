import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import { makeStyles } from '@material-ui/core/styles'
// import axios from 'axios'
import io from 'socket.io-client'


  const useStyles = makeStyles({
    AttachFileOutlinedIcon: {
      transform: 'rotate(45deg)',
    },
  })
const ChatPage = () => { 
  const classes = useStyles()

  const socket = io('http://localhost:5000') // Replace with your server URL
  const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

    useEffect(() => {
      // Listen for 'chat message' event
      socket.on('chat message', (chat) => {
        setMessages((prevMessages) => [...prevMessages, chat])
      })

      console.log(messages);

      return () => {
        // Clean up the event listener when the component unmounts
        socket.off('chat message')
      }
    }, [socket, messages])

   const handleSendMessage = () => {
     if (inputValue.trim() !== '') {
       const message = {
         username: 'John', // Replace with the appropriate username
         message: inputValue,
       }

       socket.emit('chat message', message) // Emit the chat message to the server
       setInputValue('')
     }
   }

  return (
    <div className='chatpage'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Chat name</h3>
          <p>last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Natty</span>
          this is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Natty</span>
          this is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <AttachFileOutlinedIcon className={classes.AttachFileOutlinedIcon} />
        <form>
          <input
            placeholder='Type a message'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type='submit' onClick={handleSendMessage}>
            Send a message
          </button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  )
}

export default ChatPage