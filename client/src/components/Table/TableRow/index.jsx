import React from 'react';

const TableRow = ({ row }) => {
  return (
    <tr>
      {
        row.map(cell => (
          <td>{cell}</td>
        ))
      }
    </tr>
  )
}

export default TableRow;
