import './styles.scss';
import { Link } from "react-router-dom";

const Logo = () => (
    <Link className='app-logo' to='/'>
        🎞️ MovieApp
    </Link>
)


export default Logo;