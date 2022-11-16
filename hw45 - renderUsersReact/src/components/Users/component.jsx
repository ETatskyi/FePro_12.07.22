import User from './User';

import data from './mockData';

import './styles.css';

const Users = () => (
  <>
    {data.map(user => <User key={user.id} {...user} />)}
  </>
)

export default Users;
