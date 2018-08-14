import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css'

class App extends Component {
  state = {
    persons: [
      { name: "Farzad", age: "20" },
      { name: "Ehsan", age: "24" },
      { name: "Mehdi", age: "30" },
    ],
  }

  switchNameHandler = (newName) => {
    console.log('clicked');

    // this.state.persons[0].name = "Farbod"; !! DO NOT CHANGE THE STATE THIS WAY!!!
    const persons = this.state.persons;

    persons[0].name = newName;

    this.setState({
      persons,
    });
  }

  nameChangedHandler = (event) => {
    const persons = this.state.persons;

    persons[1].name = event.target.value;

    this.setState({
      persons,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>

        <p>This is really working!!</p>

        <button
          style={styles.buttonStyle}
          onClick={() => this.switchNameHandler("Farbod")}>Switch Name</button>

        <Person
          click={this.switchNameHandler.bind(this, "Farzad!!")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My hobbies: Playing music</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hi, I'm a React App!!"));
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid rgb(215, 215, 215)',
    padding: '8px',
    cursor: 'pointer',
  },
}

export default App;
