import './styles.css';
import User from '../../components/UserCard'
import useGetData from '../../hooks/useGetData';

const UsersApp = () => {
    const data = useGetData('https://jsonplaceholder.typicode.com/users');
    const usersContainer = Array.isArray(data) ? data.map(user => <User key={user.id} {...user} />) : <p>No users found</p>;

    console.log(usersContainer)

    return (
        <>
            <h1>Users:</h1>
            <div className="usersContainer">
                {usersContainer}
            </div>
        </>
    )
}

export default UsersApp;