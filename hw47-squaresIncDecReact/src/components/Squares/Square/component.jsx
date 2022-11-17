import './styles.css';
import React, { useState } from 'react';

import Button from '../../shared/Button/component';

const Square = () => {

    const [value, setValue] = useState(0);

    return (
        <div className='square-item'>
            <div className="display">{value}</div>
            <div className="controls">
                <Button
                    userClass={"inc_dec_button"}
                    text={"+"}
                    clickHandler={() => { setValue(value + 1) }}
                />
                <Button
                    userClass={"inc_dec_button"}
                    text={"-"}
                    clickHandler={() => { setValue(value - 1) }}
                />
            </div>
        </div>
    )
}

export default Square;

