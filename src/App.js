import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Observe from './Observe';

class App extends Component {
  render() {
    const { timer, users } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Observe source={{ timer, users }}>
          {({ timer, users }) => (
            <div>
              <p>timer: {timer}</p>
              <p>user: {users}</p>
            </div>
          )}
        </Observe>
      </div>
    );
  }
}

export default App;
