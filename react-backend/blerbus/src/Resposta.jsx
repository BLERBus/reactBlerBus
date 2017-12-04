import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Table1 from './table.js';
import Paper from 'material-ui/Paper';
import "./Menu.css";


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Pergunta extends React.Component{
    constructor(){
        super()
        this.state ={
            tableGeneralRows: [],
        };
    };
    
    componentWillMount(){
        console.log(this.props.id)
        fetch('/resposta', {
            method: 'POST',
            body: JSON.stringify({"id": this.props.id}),
            headers: {"Content-Type": "application/json"}
        })
        // .then(res => res.json())
        // .then(result => {
        //     console.log(result)
        // })
        .then(res => res.json())
        .then(result => {
            let respostas = []
            // for (let i =0)
            console.log(result[0])
            for(var i = 0; i < result.length; i++){
                console.log(result[i].resposta)

                respostas.push(<TableRow key={result[i].respostaId}>
                                <TableRowColumn style={{color: "blue", textAlign: "center"}} >{result[i].respostaId}</TableRowColumn>
                                <TableRowColumn style={{color: "blue", textAlign: "center"}}>{result[i].resposta}</TableRowColumn>
                            </TableRow>)
            }
            this.setState({tableGeneralRows: respostas})
    
            })   
    }


    render( ){
        return(
            <div>
                <AppBar
                        title="A que ponto chegamos ?"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div className="row"></div>
                <div className="row">
                    <div className="col s2" id="avatar">
                    <Avatar
                        src=""
                        size={60}
                    />
                    <p>Welcome {this.props.user}</p>
                    </div>
                </div>
                
                <div className="col s5">
                <Paper>
                    <Table>
                        <TableHeader displaySelectAll = {false}>
                        <TableRow >
                            <TableHeaderColumn >Id</TableHeaderColumn>
                            <TableHeaderColumn >Respostas</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox = {false}>
                            {this.state.tableGeneralRows}
                        </TableBody>
                    </Table>
                </Paper>
                </div>
            </div>
        )
        };
        
}
export default Pergunta;    