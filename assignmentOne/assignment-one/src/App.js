import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    userName: 'Avish'
  }

  textHandler=(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  render() {
    const style={
      backgroundColor:'white',
      border:'2px solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <header className="App-header">
          <UserInput style={style}change={this.textHandler} username={this.state.userName}/>
          <UserOutput username={this.state.userName} />
          <UserOutput username={this.state.userName} />
        </header>
      </div>
    );
  }
}

export default App;
