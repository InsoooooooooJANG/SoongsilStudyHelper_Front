import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/main.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} maxHeight='300'>
          <TableHeaderColumn isKey={true} dataField='id' width='50'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category' width='100'>
            카테고리
          </TableHeaderColumn>
          <TableHeaderColumn dataField='title' width='600'>
            제목
          </TableHeaderColumn>
          <TableHeaderColumn dataField='registDate' width='100'>
            등록일
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;