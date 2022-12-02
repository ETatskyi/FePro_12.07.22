import './styles.css';

import { useParams, Link } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import Img from '../shared/Image'

const UserDetails = () => {

    const { id, name, username, email, phone } = useGetData("https://jsonplaceholder.typicode.com/users/" + useParams().userId)


    return (<>
        <Link to="/">Back to home</Link>
        <Link to="/users">Back to all users</Link>
        <h1>User info:</h1>
        <Img
            src={"http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16"}
            alt={"User Photo"}
        />
        <div className="user-info-container">
            <p className="user-id">User id: {id}</p>
            <p className="real-name">Name: {name}</p>
            <p className="username">Username: {username}</p>
            <p className="email">Email: {email}</p>
            <p className="phone">Phone: {phone}</p>
        </div>
    </>
    )
}

export default UserDetails;