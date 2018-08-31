import React, { Component } from 'react';

import TableRow from './TableRow';

export class Client extends Component {
  render() {
    const { thead, tbody } = this.props.data;
    return (
      <table className="table">
        <thead>
          <tr>
            {
              thead.map(cell => (
                <th>{cell}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            tbody.map(row => (
              <TableRow row={row} />
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default Client;
