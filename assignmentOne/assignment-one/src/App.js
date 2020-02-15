import React from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput/>
        <UserOutput/>
      </header>
    </div>
  );
}

export default App;
