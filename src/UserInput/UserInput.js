import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input className="redondeado" 
            type="text" 
            onChange={props.changed} 
            value={props.currentName} />
        </div>
    );
};

export default userInput;