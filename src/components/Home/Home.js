import React, { useState, useEffect } from 'react';
import Post from '../post/Post';

const Home = () => {

    const [post,setPost] =  useState([]);

useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setPost(data));
},[])

    return (
        <div>
            {

                post.map(postData => <Post post={postData}></Post>)
            
            }
        </div>
    );
};

export default Home;