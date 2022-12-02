import './styles.css';

import { Link } from 'react-router-dom';

const Error = () => (
    <>
        <h1>Error!</h1>
        <nav>
            <Link to="/">Back to Home</Link>
        </nav>
    </>
)


export default Error;