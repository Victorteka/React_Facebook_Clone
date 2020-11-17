import React, {useEffect, useState} from 'react'
import db from '../../firebase'
import MessageSender from '../message/MessageSender'
import Post from '../post/Post'
import './Feed.css'
import StoryReel from './StoryReel'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapShot)=>
        setPosts(snapShot.docs.map((doc)=>({id: doc.id, data: doc.data()}))))
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>

            {posts.map((post)=>(
            <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            image={post.data.image}
            timestamp={post.data.timestamp}
            username={post.data.username}
            />
            ))}
                        
        </div>
    )
}

export default Feed
