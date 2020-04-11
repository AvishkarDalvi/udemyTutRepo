import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps',props);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }
  componentDidUpdate(prevProps,prevState,snapShot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapShot);
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <ErrorBoundary key={person.id}><Person
        name={person.name} age={person.age} key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      /></ErrorBoundary>
    })
  }

};

export default Persons;