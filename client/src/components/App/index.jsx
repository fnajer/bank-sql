import React, { Component, Fragment } from 'react';
import './App.css';

import Entry from '../Entry';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';
import Slider from '../Slider';
import DataTable from '../DataTable';

const dataClient = {
  body: {
    id: 2324,
    name: 'tetege',
    passport: 'f3g3g',
    date: '913032',
    telephone: 24235,
    address: 'gwg3 3g',
  },
  thead: [
    'Идентификационный код',
    'ФИО',
    'Номер паспорта',
    'Дата рождения',
    'Телефон',
    'Адрес',
  ],
  tbody: [
    [
      242,
      'tetet',
      23,
      242,
      'tetet',
      23,
    ],
    [
      22,
      'efegf',
      11,
      242,
      'tetet',
      23,
    ],
  ]
};

const dataEmployer = {
  body: {
    id: 1,
    name: 'fef',
    passport: 'f3g3g',
    date: '913032',
    telephone: 24235,
    address: 'gwg3 3g',
  },
  thead: [
    'Идентификационный код',
    'ФИО',
    'Номер паспорта',
    'Дата рождения',
    'Телефон',
    'Адрес',
  ],
  tbody: [
    [
      242,
      'tetet',
      23,
      242,
      'tetet',
      23,
    ],
    [
      22,
      'efegf',
      11,
      242,
      'tetet',
      23,
    ],
  ]
};

class App extends Component {
  state = {
    authenticated: true,
    data: dataClient,
  }
  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;
    switch (pathname) {
      case '/clients':
        this.setState({
          data: dataClient
        });
        break;
      case '/employees':
        this.setState({
          data: dataEmployer
        });
        break;
      default:
        break;
    }
  }
  changeProps = () => {
    // const { pathname } = this.props.location;
    // switch (pathname) {
    //   case '/clients':
    //     this.setState({
    //       data: dataEmployer
    //     });
    //     break;
    //   case '/employees':
    //     this.setState({
    //       data: dataClient
    //     });
    //     break;
    //   default:
    //     break;
    // }
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
            <input type="text" className="id_field"></input>
            <Navbar transitToTable={this.changeProps} />
            <Toolbar />
            <Slider data={this.state.data} />
            <DataTable data={this.state.data} />
          </Fragment>
        }
      </div>
    );
  }
}

export default App;
