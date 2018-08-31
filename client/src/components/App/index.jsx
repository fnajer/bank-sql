import React, { Component, Fragment } from 'react';
import './App.css';

import Entry from '../Entry';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';

class App extends Component {
  state = {
    authenticated: true,
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        {
          !authenticated &&
          <Entry />
        }
        {
          authenticated &&
          <Fragment>
            <Navbar />
            <Toolbar />
          </Fragment>
        }
      </div>
    );
  }
}

export default App;
