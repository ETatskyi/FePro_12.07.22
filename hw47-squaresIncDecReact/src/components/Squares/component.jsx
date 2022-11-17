import './styles.css';
import Square from './Square';

const Squares = ({ squaresCount }) => {
    let squares = [];
    for (let i = 0; i < squaresCount; i++) {
        squares.push(
            <Square
                key={i+1}
            />
        )
    }

    return (
        <div className='squares-container'>
            {squares}
        </div>
    )
}

export default Squares;