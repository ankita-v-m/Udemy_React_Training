import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'
 
const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP request can be send from this React Hook. 
        //But as useEffect runs everytime the component renders,we don't want to send HTTP reuqest everytime. 
        //So then we can use setTimeout. Pass [] empty array to run it only once

        // setTimeout(() => {
    //         alert("Saved Data to cloud");
    //      }, 1000);
    // toggleButtonRef.current.click();

    toggleBtnRef.current.click();
    return () => {
        console.log("[Cockpit.js] cleanup work in useEffect");
      };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    });

    let assignedClasses = [];
    let btnClass = "";

    if(props.showPersons){
        btnClass = classes.Red;    
    }
    if(props.personsLength <=2){
        assignedClasses.push('red');
    }
    if(props.personsLength <=1){
        assignedClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>  
            <button onClick={authContext.login}>Log in</button>
            
        </div>
    );
};

export default React.memo(Cockpit);

// here by using React.memo , Cockpit component will render only when something happens related to cockpit component