import React, { useState, useEffect} from 'react';
import './Sidebarchat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase'
import {Link} from 'react-router-dom';

function Sidebarchat({id, name, newChat}) {
    const [feed, setFeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
       if(id) {
        db.collection('rooms').doc(id).collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc =>
                doc.data()))
            )
        )
       }
    }, [id])

    useEffect(() => {
        setFeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () =>{
        const roomName = prompt('Enter room name');
        if(roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !newChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarchat'>
                <Avatar src={`https://avatars.dicebear.com/api/micah/${feed}.svg`}/>
                <div className='sidebar_chatsinfo'>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className='sidebarchat'>
                <h2>Add New Chat</h2>
            </div>
    )
}

export default Sidebarchat


