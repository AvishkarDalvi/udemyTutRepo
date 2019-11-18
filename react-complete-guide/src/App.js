import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state={
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Stephanie',age:26}
    ],
    otherState:'some other value'
  }

  switchNameHandler=(name)=>{
   // console.log('Was Clicked!!');
  //Dont do this-> this.state.persons[0].name='Maximilian';
  this.setState({persons:[
    {name:name,age:28},
    {name:'Manu',age:29},
    {name:'Stephanie',age:27}
  ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React app.</h1>
        <p>This is really working.</p>
        {/* one way of binding argument to a method call */}
        <button onClick={()=> this.switchNameHandler('!Maximilian!')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         //another way of binding argument to a method call
         click={this.switchNameHandler.bind(this,'Max!!!')}>My Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name}
         age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }
}

export default App;
