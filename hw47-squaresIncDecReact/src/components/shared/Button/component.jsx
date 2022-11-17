import './styles.css';

const Button = ({ text, userClass, clickHandler }) => (
    <button className={userClass}
        onClick={clickHandler}>
        {text}
    </button>
)

export default Button;