import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I am a react app</h1>
      <p> This is a paragraph</p>
  
      <Person name="Tony" age="52"/>
      <Person name="Thor" age="1500">and I am the son of Odin</Person>
      <Person name="Natasha" age="32"/>
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
