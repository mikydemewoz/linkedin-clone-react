import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import './Feed.css'
import InputOption from './InputOption';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'

function Feed() {

    const [posts,setPosts] = useState([])
    const [input,setInput] = useState('')
    const user = useSelector(selectUser)

    useEffect(()=>{
        db.collection("posts")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        )
    },[])

    const sendPost = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7005f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CbCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
                </div>
            </div>

            <FlipMove>
                {posts.map(({id, data: { name, description, message, photoUrl }})=> 
                    (<Posts
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                 />))}
            </FlipMove>
                        
        </div>
    )
}

export default Feed
