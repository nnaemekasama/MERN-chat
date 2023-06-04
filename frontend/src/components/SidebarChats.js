import { Avatar } from '@material-ui/core'
import React from 'react'

const SidebarChats = () => {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Chat Name</h2>
            <p>last message in chat</p>
        </div>
    </div>
  )
}

export default SidebarChats