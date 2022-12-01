import './styles.css';

import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <h1>Welcome to homepage!</h1>
        <nav className="navigation">
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </nav>
    </>
)


export default Home;