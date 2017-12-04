import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Table1 from './table.js';
import Paper from 'material-ui/Paper';
import Resposta from './Resposta.jsx';


import "./Menu.css";


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Forum extends React.Component{
    constructor(){
        super()
        this.state ={
            tableGeneralRows: [],
            id : 0,
        };
    };


    redirectPergunta(ev){
        this.props.forumToQuestion(this.state.tableGeneralRows[ev].key)
        console.log(this.state.tableGeneralRows[ev].key)
    };

    componentWillMount(){
        fetch('/forum', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            let perguntas = []
            // for (let i =0)
            console.log(result)
            for(var i = 0; i < result.length; i++){
                console.log(result[i].perguntaId)

                perguntas.push(<TableRow key={result[i].perguntaId}>
                                <TableRowColumn style={{color: "blue", textAlign: "center"}} >{result[i].perguntaId}</TableRowColumn>
                                <TableRowColumn style={{color: "blue", textAlign: "center"}}>{result[i].pergunta}</TableRowColumn>
                            </TableRow>)
            }
            this.setState({tableGeneralRows: perguntas})
    
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
                    <Table onCellClick ={(ev) => this.redirectPergunta(ev)}>
                        <TableHeader displaySelectAll = {false}>
                        <TableRow >
                            <TableHeaderColumn >Id</TableHeaderColumn>
                            <TableHeaderColumn >Perguntas</TableHeaderColumn>
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
export default Forum;