import React, { Component } from 'react';
//import React, { useState } from 'react'    // this is for React Hooks
import cssStyleClassName from './App.css';
//import styled from 'styled-components'
//import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'

// IMP while using CSS Module :
//When we have react-scripts version above 1.0.0 then we need not to eject, just use module while importing.
// eg. import cssStyleClassName from './Person.module.css'
// and rename css file as Filename.module.css and it will automatically get enabled.

//Styled component
/*const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 3px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'yellow' : 'lightgreen'};
    color: black;
  }
`;
*/

class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Tony", age: 52},
      {id: '2', name: "Thor", age: 1500},
      {id: '3', name: "Natasha", age: 32}
    ],
    showPersons: false
  }

/*  switchNameHandler = (newName) => {
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
*/
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person ={
      ...this.state.persons[personIndex]
    }

//    const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState(
      {
        persons: persons
  //      persons: [
  //        {name: "Iron man", age:54},
  //        {name: event.target.value, age: 1500},
  //        {name: "Black widow", age: 32}]         
      }
    )
  }

  deletePersonHandler = (personIndex) => {
//     const persons = this.state.persons.slice()
      const persons= [...this.state.persons]
      persons.splice(personIndex,1)
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

/*     const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
*/
    let persons = null
    let btnClass = ''

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
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
//      style.backgroundColor= 'red'  // setting style dynamically
//      style[':hover'] = {
//        backgroundColor: 'salmon',
//        color: 'black'
//      }
      btnClass = cssStyleClassName.Red

    }

//    let classes = ['red', 'bold'].join(' ')
      const assignedClasses = []
      if(this.state.persons.length <=2){
        assignedClasses.push(cssStyleClassName.red)     // assignedClasses =['red']
      }
      if(this.state.persons.length <=1){
        assignedClasses.push(cssStyleClassName.bold)    // assignedClasses = ['red', 'bold']
      }


    return (
  //To use Radium media queries, wrap <div> tag in  <StyleRoot>
      <div className={cssStyleClassName.App}>
      <h1>Hi, I am a react app</h1>
      <p className={assignedClasses.join(' ')}> This is a paragraph</p>
{/*       <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> */}
      <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>  
        {persons}

        {/*   onClick={() => this.switchNameHandler("Iron man")}>Switch name</button>  Use this after style to switch Names */}  

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
//export default Radium(App)
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
