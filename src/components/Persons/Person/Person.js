import React from 'react';
import './Person.css'

const person = (props) => {

    return (

    // <div className="Person" style={style}>
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} yrs old {props.children}.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

//export default Radium(person)
export default person