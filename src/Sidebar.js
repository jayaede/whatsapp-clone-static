import { Avatar, IconButton } from '@material-ui/core';
import { DonutLarge, SearchOutlined } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React,{useState, useEffect} from 'react'
import './Sidebar.css';
import Sidebarchat from './Sidebarchat';
import db from './firebase'
import {useStateValue} from './StateProvider'
function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
      const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
          setRooms(snapshot.docs.map((doc) =>({
              id: doc.id,
              data: doc.data(),
          }))
        )
    );
      return () => {
        unsubscribe();
      }
    }, [])
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src={user?.photoURL}/>
                <div className='sidebar_headerRight'>
                    <IconButton>
                       <DonutLarge /> 
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <div className='search_container'>
                    <SearchOutlined />
                    <input placeholder="search or start new chat" type='text' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <Sidebarchat newChat/>
                {rooms.map( room => (
                    <Sidebarchat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
            
        </div>
    )
}

export default Sidebar
