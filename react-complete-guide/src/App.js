import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (name) => {
    // console.log('Was Clicked!!');
    //Dont do this-> this.state.persons[0].name='Maximilian';
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, i'm a React app.</h1>
        <p>This is really working.</p>
        {/* one way of binding argument to a method call */}
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }
}

export default App;
