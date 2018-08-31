import React, { Component, Fragment } from 'react';

import './dataTable.css';

export class DataTable extends Component {
  render() {
    return (
      <Fragment>
        <main className="separ_container">
        </main>
        <main className="main_container">
          <h1 className="main_container__title">Вывод данных</h1>
          <div id="blockForTable" />
        </main>
      </Fragment>
    )
  }
}

export default DataTable;
