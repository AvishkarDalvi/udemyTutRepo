import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28, id: 1 },
      { name: 'Manu', age: 29, id: 2 },
      { name: 'Stephanie', age: 26, id: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    // const person=Object.assign({},this.state.persons[personIndex]);
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age}
                key={person.id} click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'].backgroundColor = {
        backgroundColor: 'blue',
        color: 'black'
      }
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length < 2) {
      classes.push('bold');
    }
    return (

        <div className="App">
          <h1>Hi, i'm a React app.</h1>
          <p className={classes.join(' ')}>This is really working.</p>
          {/* one way of binding argument to a method call */}
          <button style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}

        </div>


    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }
}

export default App;
