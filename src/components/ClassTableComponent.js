import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/main.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

function attendFormatter(cell, row){
console.log(cell);
    if(cell == 'true'){
        return '<div style="width:10px; height:10px; border-radius:10px; background-color:green; margin:auto;"></div>';
    } else if(cell=='false') {
        return '<div style="width:10px; height:10px; border-radius:10px; background-color:red; margin:auto;"></div>';
    } else{
        return cell;
    }
}

class Table1 extends Component {
  render() {
      return (
        <div>
          <BootstrapTable data={this.props.data} maxHeight='300'>
            <TableHeaderColumn dataField='className' width='100'>
              과목
            </TableHeaderColumn>
            <TableHeaderColumn isKey={true}  dataField='title' width='400'>
              수업 제목
            </TableHeaderColumn>
            <TableHeaderColumn dataField='isAttend' dataFormat={attendFormatter} dataAlign="center" width='100'>
              출석여부
            </TableHeaderColumn>
            <TableHeaderColumn dataField='leftTime' width='100' dataAlign="center">
              남은시간
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
  }
}

export default Table1;