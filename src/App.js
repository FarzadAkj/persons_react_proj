import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Farzad", age: "20" },
      { name: "Ehsan", age: "24" },
      { name: "Mehdi", age: "30" },
    ],
  }

  switchNameHandler = () => {
    console.log('clicked');

    // this.state.persons[0].name = "Farbod"; !! DO NOT CHANGE THE STATE THIS WAY!!!
    const persons = this.state.persons;

    persons[0].name = "Farbod";

    this.setState({
      persons,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>

        <p>This is really working!!</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Playing music</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hi, I'm a React App!!"));
  }
}

export default App;
