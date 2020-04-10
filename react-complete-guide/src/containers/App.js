import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { name: 'Max', age: 28, id: 1 },
      { name: 'Manu', age: 29, id: 2 },
      { name: 'Stephanie', age: 26, id: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons} clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }
}

export default App;
