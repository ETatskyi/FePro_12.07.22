import './styles.css';

import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <h1>Welcome to homepage!</h1>
        <nav>
            <Link to="/users">Users</Link>
        </nav>
    </>
)


export default Home;