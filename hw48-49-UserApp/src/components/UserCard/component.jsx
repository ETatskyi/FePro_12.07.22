import './styles.css';
import Img from '../shared/Image';
import { Link } from 'react-router-dom';

const User = ({id, name}) => (
  <Link className="card" to={"./"+id}>
    <Img
      src={"http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16"}
      alt={"User Photo"}
    />
    <div className="user-info-container">
      <p className="real-name">{name}</p>
    </div>
  </Link>
)

export default User;
