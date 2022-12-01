import './styles.css';
import Post from './Post/component';
// import usePostData from '../../../hooks/usePostNewPost';

const Posts = ({ posts }) => {
    let postsData;

    if (posts.length === 0) {
        postsData = <h2>Posts list is empty</h2>
    } else {
        postsData = <ul>
            {posts.map(post => <Post
                key={post.id+Math.floor(Math.random()*10000000)}
                {...post}
            />)}
        </ul>
    }

    return postsData;
}

export default Posts;