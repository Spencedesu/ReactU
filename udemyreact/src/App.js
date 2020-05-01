import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Spencer", age: 24},
      {name : "orlnelius", age: 31},
      {name: "stef", age: 21}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello from apple world</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Output</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Mmm</Person>
      </div>
    );
  }
}

export default App;
