import React from 'react';
//import Radium from 'radium'
import styled from 'styled-components'
//import './Person.css'

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width : 500px) {
        width: 450px;
        color: royalblue;
    }`
const person = (props) => {
//    return <p>I am a Person and I am {Math.floor(Math.random() * 50)} years  old!</p>

//    const style = {
//        '@media (min-width : 500px)': {
//                width: '450px',
//                color: 'royalblue'            
//                }
//    }
return (
    // <div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I am {props.name} and I am {props.age} yrs old {props.children}.</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>

    )
};

//export default Radium(person)
export default person