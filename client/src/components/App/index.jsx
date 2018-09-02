import React, { Component, Fragment } from 'react';
import './App.css';

import Entry from '../Entry';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';
import Slider from '../Slider';
import DataTable from '../DataTable';

const dataClient = [
  [
    242,
    'tetet',
    23,
    '2018-03-01',
    'tetet',
    23,
  ],
  [
    22,
    'efegf',
    11,
    '2018-03-01',
    'tetet',
    23,
  ],
];

const dataEmployer = [
  [
    33,
    'Vasyz',
    'TE11',
    809903244,
    '2018-03-01',
    '2011-01-01',
    2,
    4,
  ],
  [
    34,
    'Gaga',
    'TR22',
    8029903244,
    '2018-03-01',
    '2011-01-01',
    2,
    4,
  ],
  [
    35,
    'Mogo',
    'TE11',
    809903244,
    '2018-03-01',
    '2011-01-01',
    2,
    4,
  ]
];

const tableHeaders = [
  [
    'Идентификационный код',
    'ФИО',
    'Номер паспорта',
    'Дата рождения',
    'Телефон',
    'Адрес',
  ], 
  [
    'Идентификационный код',
    'ФИО',
    'Номер паспорта',
    'Телефон',
    'Дата рождения',
    'Дата приёма',
    'Номер должности',
    'Номер отделения',
  ],
];

class App extends Component {
  state = {
    authenticated: true,
    data: {
      thead: tableHeaders[0],
      tbody: dataClient,
    },
    table: 'clients',
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;
    switch (pathname) {
      case '/clients':
        this.setState({
          data: {
            thead: tableHeaders[0],
            tbody: dataClient,
          },
          table: 'clients',
        });
        break;
      case '/employees':
        this.setState({
          data: {
            thead: tableHeaders[1],
            tbody: dataEmployer,
          },
          table: 'employees',
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
            <Slider data={this.state.data.tbody} table={this.state.table} />
            <DataTable data={this.state.data} />
          </Fragment>
        }
      </div>
    );
  }
}

export default App;
