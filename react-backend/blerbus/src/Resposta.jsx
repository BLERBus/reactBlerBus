import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import "./Menu.css";
import MenuLateral from './MenuLateral.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Resposta extends React.Component{
    constructor(){
        super()
        this.state ={
            tableGeneralRows: [],
        };
    };
    
    getRespostas(){
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
            console.log(result) 
            for(var i = 0; i < result.length; i++){
                // console.log(result[i].resposta)

                respostas.push(<TableRow key={result[i].respostaId}>
                                <TableRowColumn style={{color: "blue",  textAlign: "center"}} >{result[i].autor}</TableRowColumn>
                                <TableRowColumn style={{color: "blue"}}>{result[i].resposta}</TableRowColumn>
                            </TableRow>)
            }
            this.setState({tableGeneralRows: respostas})
    
            })
    }
    
    componentWillMount(){
        this.getRespostas()
    }

    respostaValue(value){
        this.setState({respostaValue: value})
    }

    enviarClicked(ev){
        fetch('/responder', {
            method: "POST",
            body: JSON.stringify({"resposta": this.state.respostaValue,
                                "perguntaId": this.props.id,
                                "autor": this.props.user}),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === "200"){
                alert("Pergunta enviado com sucesso")
                this.getRespostas()
            }
            console.log(result)
        })

    }

    render( ){
        const styles = {
            button: {
              margin: 12,
            },
            exampleImageInput: {
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              opacity: 0,
            },
        }

        return(
            <div>
                <AppBar
                        title="A que ponto chegamos ?"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={{backgroundColor:'#9FA8DA', color: 'black',}}
                />
                <div className="row"></div>
                <div className="row">
                    <div className="col s2" id="avatar">
                        <MenuLateral user = {this.props.user} setCurrentPage={this.props.setCurrentPage}/>
                    </div>
                    <div className="col s9">
                    <p> Pergunta: {this.props.question}</p>
                    <br/>
                    <TextField
                            name="adress"
                            hintText="Responda aqui"
                            fullWidth={true}
                            onChange={(ev) => this.respostaValue(ev.target.value)}
                    />
                    <br/>
                    <RaisedButton
                        backgroundColor = "#B39DDB" 
                        primary={true}
                        target="_blank"
                        label="Enviar" 
                        style={styles.button}
                        onClick={(ev) => this.enviarClicked(ev)}
                    />
                    <br/>
                    <br/>
                    <Paper zDepth={2}>
                        <Table>
                            <TableHeader adjustForCheckbox = {false} displaySelectAll = {false} style={{backgroundColor:'#9FA8DA', color: 'white'}}>
                            <TableRow >
                                <TableHeaderColumn  style={{backgroundColor:'#9FA8DA', color: 'black',textAlign: "center"}}>Autor</TableHeaderColumn>
                                <TableHeaderColumn  style={{backgroundColor:'#9FA8DA', color: 'black'}}>Respostas</TableHeaderColumn>
                            </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox = {false}>
                                {this.state.tableGeneralRows}
                            </TableBody>
                        </Table>
                    </Paper>
                    </div>
                    <div className="col s1">
                    <br/>
                    <br/>
                    <br/>
                    
                    </div>
                </div>
            </div>
        )
        };
        
}
export default Resposta; 