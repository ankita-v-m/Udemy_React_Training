import React, { useEffect } from 'react';
import classes from './Cockpit.css';
 
const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP request can be send from this React Hook. 
        //But as useEffect runs everytime the component renders,we don't want to send HTTP reuqest everytime. 
        //So then we can use setTimeout. Pass [] empty array to run it only once

        // setTimeout(() => {
    //         alert("Saved Data to cloud");
    //      }, 1000);
    // toggleButtonRef.current.click();
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

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
        assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>  
        </div>
    );
};

export default Cockpit;