import React, { Component } from 'react';
import "./App.css";
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
//import styled from 'styled-components'
//import Radium, {StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Person from '../components/Persons/Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Tony", age: 52},
      {id: '2', name: "Thor", age: 1500},
      {id: '3', name: "Natasha", age: 32}
    ],
    showPersons: true
  };

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

    this.setState({
        persons: persons
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

  render() {

    let persons = null;

    if(this.state.showPersons)
    {
      persons =<Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>   
    )
  }
}
}
export default App

