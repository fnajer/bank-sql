import React, { Component } from 'react';
import './App.css';

import Entry from '../Entry';

class App extends Component {
  state = {
    authenticated: true,
  }
  
  render() {
    return (
      <div className="App">
        <Entry />
      </div>
    );
  }
}

export default App;
