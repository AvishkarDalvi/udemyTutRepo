import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps',props);
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons!==this.props.persons){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }
  componentDidUpdate(prevProps,prevState,snapShot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapShot);
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <ErrorBoundary key={person.id}><Person
        name={person.name} age={person.age} key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        // isAuth={this.props.isAuthenticated}
      /></ErrorBoundary>
    })
  }

};

export default Persons;