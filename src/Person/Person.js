import React from 'react';

import './Person.css'

const person = (props) => {
//    return <p>I am a Person and I am {Math.floor(Math.random() * 50)} years  old!</p>

return (
    <div className="Person">
        <p onClick={props.click}>I am {props.name} and I am {props.age} yrs old {props.children}.</p>
        <input type="text" onChange={props.changed}/>
    </div>

    )
};

export default person