import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Paper from 'material-ui/Paper';

const style = {
  height: '50%',
  width: '50$',
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
};



const lala = {
    selectable: false,
};

class Table1 extends React.Component{
    render(){
        return(
            <Paper style={style} zDepth={1} rounded={false}>
            <Table >
    <TableHeader displaySelectAll = {false}>
      <TableRow displayRowCheckbox = {false}>
        <TableHeaderColumn displaySelectAll = {false}>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader >
    <TableBody displaySelectAll = {false}>
      <TableRow enableSelectAll={false}>
        <TableRowColumn >1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </Paper>

        );
    }
}

export default Table1;