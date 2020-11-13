import React from 'react';

const person = (props) => {
//    return <p>I am a Person and I am {Math.floor(Math.random() * 50)} years  old!</p>

return (
    <div>
        <p>I am {props.name} and I am {props.age} yrs old {props.children}.</p>
        <p>I am git demo</p>
        <p>I am git demo2</p>
    </div>

    )
};

export default person