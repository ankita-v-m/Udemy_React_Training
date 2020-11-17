import React, { Component } from 'react'
//import React, { useState } from 'react'    // this is for React Hooks
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: "Tony", age: 52},
      {name: "Thor", age: 1500},
      {name: "Natasha", age: 32}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
      console.log("Clicked")
      this.setState(
        {
          persons: [
            {name: newName, age:54},
            {name: "Chris", age: 1500},
            {name: "Black widow", age: 32}
          ]         
        }
      )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: "Iron man", age:54},
          {name: event.target.value, age: 1500},
          {name: "Black widow", age: 32}
        ]         
      }
    )

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
{/*
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>   
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,"Changed")}
            changed={this.nameChangedHandler}>
            and I am the son of Odin</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
*/}

        </div>
      )
    }

    return (
      <div className="App">
      <h1>Hi, I am a react app</h1>
      <p> This is a paragraph</p>
      <button 
      style={style}
    //  onClick={() => this.switchNameHandler("Iron man")}>Switch name</button>
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
{/*       {this.state.showPersons ? 
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>   
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,"Changed")}
            changed={this.nameChangedHandler}>
            and I am the son of Odin</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div> : null
      } */}
{/*   <Person name="Tony" age="52"/>   
      <Person name="Thor" age="1500">and I am the son of Odin</Person>
      <Person name="Natasha" age="32"/>

      This is the way we can use props
*/}   
    </div>    
    )

  // Above code looks like a html code but internally it compiled to below code and hence it is called as JSX 
  // Here createElement method can have an infinite amount of argumemts but at least three.
  // 1st is the element we want to render eg. div. 
  // 2nd is the configuration for an element. If we don't want to pass anything , pass null
  // 3rd is the children of an element like head tags, p tags
    
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, now this works') );

  // It is becomes very complex when we want to add so many elements and hence first way is used most to write a code but internally it works like 2nd way.

  }
}
export default App

// React Hooks
{/*
const App = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      {name: "Tony", age: 52},
      {name: "Thor", age: 1500},
      {name: "Natasha", age: 32}
    ]
  })

  const [otherState, setOtherState] = useState('Some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    console.log("Clicked")
    setPersonState(
      {
        persons: [
          {name: "Iron man", age:54},
          {name: "Chris", age: 1500},
          {name: "Black widow", age: 32}
        ]
        
      }
    )
  }

  return (
    <div className="App">
    <h1>Hi, I am a react app</h1>
    <p> This is a paragraph</p>
    <button onClick={switchNameHandler}>Switch name</button>

    <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>   
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>and I am the son of Odin</Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  
  )

}
export default App
*/}
