import React from 'react'
import DonutLargeTwoToneIcon from '@material-ui/icons/DonutLargeTwoTone';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChats from '../components/SidebarChats';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar__header'>
          <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/343395060_925116462069919_5091858098923769218_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRihdYrfXa_hnhN7OCuuNjFDYsHlo63bOLdFkK_4FNU4A&oe=647F34CF' />
          <div className='sidebar__headerRight'>
            <IconButton>
              <PeopleAltIcon />
            </IconButton>
            <IconButton>
              <DonutLargeTwoToneIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlinedIcon />
            <input placeholder='Search or start new chat' type='text' />
          </div>
          <IconButton>
            <FilterListOutlinedIcon />
          </IconButton>
        </div>
        <div className="sidebar__chats">
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
        </div>
      </div>
    </>
  )
}

export default Sidebar