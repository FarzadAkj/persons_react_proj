import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: "Farzad", age: "20" },
        { id: '2', name: "Ehsan", age: "24" },
        { id: '343refsf', name: "Mehdi", age: "30" },
      ],
      showPersons: false,
    }
    console.log('App.js inside constructor');
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('App.js inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js inside shouldComponentUpdate', nextProps, nextState);
    // return this.state.showPersons == false;

    return nextState.persons !== this.state.persons || this.state.showPersons === false || nextState.showPersons !== this.state.showPersons;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App.js inside componentDidUpdate', prevProps, prevState);
  }

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;

    /*for copy*/
    // const persons = this.state.persons.slice();

    /* OR */

    const persons = [...this.state.persons];

    persons.splice(index, 1/* one element */);

    this.setState({ persons });
  }

  render() {
    console.log('App.js inside render');
    let persons = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>

        <p>This is really working!!</p>

        <button
          style={styles.buttonStyle}
          onClick={this.toggleNameHandler}>Toggle Person</button>

        {persons}
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
