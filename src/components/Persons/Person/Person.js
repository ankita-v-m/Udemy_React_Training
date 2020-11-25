import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import './Person.css'
//import Auxiliary from '../../../hoc/Auxiliary'
//import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; 

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
        <Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
                }
                     
            {/* <AuthContext.Consumer>
          {context => {
          }}
        </AuthContext.Consumer> */}
        {/* // <div className="Person"> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        </Fragment>
        )
    }
} 

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

//export default Radium(person)
//export default withClass(Person, classes.Person)
export default Person

// We can use Fragment instead of AUxuliary as both does the same task