import './styles.css';

const Post = ({ id, title, body }) => {
    return (
        <li>
            <h4>Post title: {title}</h4>
            <p>{body}</p>
        </li>
    )
}

export default Post;