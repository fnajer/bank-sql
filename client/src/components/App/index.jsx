import React, { Component, Fragment } from 'react';
import './App.css';

import Entry from '../Entry';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';
import Slider from '../Slider';
import DataTable from '../DataTable';

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
            <input type="text" class="id_field"></input>
            <Navbar />
            <Toolbar />
            <Slider />
            <DataTable />
          </Fragment>
        }
      </div>
    );
  }
}

export default App;
