import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Este es el primer párrafo de {props.name} </p>
            <p>Este es el segundo párrafo de {props.name} </p>
        </div>
    )
};

export default userOutput