import React, { useState, useEffect } from 'react';
import TableBody from 'components/inventory/TableBody';

const Table = ({ data, pagination }) => {

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead className="table_head">
          <tr>
            <th colSpan="2">Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>
        {/* {children} */}
          <TableBody rows={data}/>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              {pagination}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;