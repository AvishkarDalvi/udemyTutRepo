import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state={
    input:''
  }
  inputChangeHandler=(event)=>{
    const input=event.target.value;
    this.setState({
      input:input
    })
  }
  charComponentHandler=(index)=>{
    const charArray=[...this.state.input.split('')];
    charArray.splice(index,1);
    const input=charArray.join('');
    this.setState({
      input:input
    })
  }
  render() {
    const charArray=[...this.state.input.split('')];
    let boxes=(
      <div>
        {charArray.map((c,index)=>{
          return <CharComponent character={c} click={()=>this.charComponentHandler(index)}/>
        })}
      </div>
    );
    return (
      <div className="App">
      <h1>Assignment Two</h1>
        <input type='text' onChange={(event)=>this.inputChangeHandler(event)} value={this.state.input}/>
        <p>The length of the input is :=> {this.state.input.length}</p>
        <ValidationComponent length={this.state.input.length}/>
        {boxes}
      </div>
    );
  }
}

export default App;
