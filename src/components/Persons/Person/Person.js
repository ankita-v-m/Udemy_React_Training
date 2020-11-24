//import classes from '*.module.css';
import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} yrs old {this.props.children}.</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
    
        )
    }
    
    
};

//export default Radium(person)
export default Person