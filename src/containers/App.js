import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
//import styled from 'styled-components'
//import Radium, {StyleRoot} from 'radium'
//import Person from '../components/Persons/Person/Person';
//import withClass from '../hoc/withClass'
//import classes from '*.module.css';
//import Auxiliary from '../hoc/Auxiliary'


class App extends Component {  

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  };

  state = {
    persons: [
      {id: '1', name: "Tony", age: 52},
      {id: '2', name: "Thor", age: 1500},
      {id: '3', name: "Natasha", age: 32}
    ],
    otherState: "Some other state",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

//  static getDerivedStateFromProps(props,state){
//    console.log('[App.js] getDerivedStateFromProps',props);
//    return state;
//  }

//  componentWillMount(){
//    console.log('[App.js] componentWillMount');
//  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person ={
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
        };
    });
  };

  deletePersonHandler = (personIndex) => {
//     const persons = this.state.persons.slice()
      const persons= [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated}
        />
      )
    }
    return (
    //  <WithClass classes="App">
      <div className="App">
        <button 
          onClick={() => {
            this.setState({showCockpit: false})
          }}>
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
        {this.state.showCockpit ? (
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        <h2>{this.state.changeCounter}</h2>
        </AuthContext.Provider>
        </div>
    //  </WithClass>   
    )
  }
}

//export default withClass(App);
export default App;

