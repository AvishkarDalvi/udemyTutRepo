import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';
import ParentElement from './ParentElement';
const statArr=['Avishkar','Nitin'];
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

    return (
      <div className="App">
        {/* <header className="App-header">
          <UserInput change={this.textHandler} username={this.state.userName}/>
          <UserOutput username={this.state.userName} />
          <UserOutput username={this.state.userName} />
        </header> */}
<ParentElement names={statArr}/>
      </div>
    );
  }
}

export default App;
