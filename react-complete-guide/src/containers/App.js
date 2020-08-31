import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

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
    showPersons: false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
  loginHandler=()=>{
this.setState({authenticated:true})
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
    this.setState((prevState,props)=>{
return{ persons: persons,changeCounter:prevState.changeCounter+1}
    })
  }
  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons} clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} isAuthenticated={this.state.authenticated}
        />
    }
    return (
      <WithClass classes={classes.App}>
      <button onClick={()=>{
        this.setState({
        showCockpit:false
        })
      }} className={classes.btnPit}>Remove Cockpit</button>
      <AuthContext.Provider value={{authenticated:this.state.authenticated,
      login:this.loginHandler}}
      >
      {this.state.showCockpit?
       ( <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} showPersons={this.state.showPersons}
          // login={this.loginHandler}
        />):null}
        {persons}
        </AuthContext.Provider>
      </WithClass>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }
}

export default App;
