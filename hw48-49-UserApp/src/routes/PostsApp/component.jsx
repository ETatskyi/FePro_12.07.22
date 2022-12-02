import './styles.css';
import { useState } from 'react';
import Posts from './Posts';
import InputForm from './InputForm';
import usePostNewPost from '../../hooks/usePostNewPost'

const PostsApp = () => {
    const [posts, setPosts] = useState([]);


    const addPost = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(resp => resp.json())
            .then(post => { setPosts(posts.concat(post)) })
            .catch(console.log);
    }

    return (
        <>
            <h1>Posts App</h1>
            <InputForm submitHandler={addPost} />
            <Posts posts={posts} />
        </>
    )
}

export default PostsApp;