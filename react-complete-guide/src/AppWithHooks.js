import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app=props=> {

    const stateArr=useState({
        persons:[
          {name:'Max',age:28},
          {name:'Manu',age:29},
          {name:'Stephanie',age:26}
        ],
        otherState:'some other value'
      })

    return (
      <div className="App">
        <h1>Hi, i'm a React app.</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Does this work now?'));
  }


export default app;

  switchNameHandler=()=>{
   // console.log('Was Clicked!!');
  //Dont do this-> this.state.persons[0].name='Maximilian';
  this.setState({persons:[
    {name:'Maximilian',age:28},
    {name:'Manu',age:29},
    {name:'Stephanie',age:27}
  ] })
  }