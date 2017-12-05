import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Resposta from './Resposta.jsx';
import MenuLateral from './MenuLateral.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from 'material-ui-search-bar'
import { Async } from 'react-select';
import "./Menu.css";
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
  } from 'material-ui/styles/colors';


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
            selectValue: "",
            perguntaValue: "",
        };
    };


    redirectPergunta(ev){
        console.log(this.state.tableGeneralRows[ev].props.children.props.children)
        this.props.forumToQuestion(this.state.tableGeneralRows[ev].key, this.state.tableGeneralRows[ev].props.children.props.children)
    };

    redirectPerguntaSearch(id, pergunta){
        this.props.forumToQuestion(id, pergunta)
    };

    proporValue(value){
        this.setState({proporValue: value})
    }

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
                console.log(result[i].id)

                perguntas.push(<TableRow key={result[i].id}>
                                {/* <TableRowColumn style={{color: "blue", textAlign: "center"}}>{result[i].id}</TableRowColumn> */}
                                <TableRowColumn style={{color: "blue"}}>{result[i].pergunta}</TableRowColumn>
                            </TableRow>)
            }
            this.setState({tableGeneralRows: perguntas})
    
            })   
    }

    enviarClicked(ev){
        fetch('/forum', {
            method: "POST",
            body: JSON.stringify({"pergunta": this.state.proporValue}),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === "200"){
                alert("Pergunta enviado com sucesso")
                window.location.reload()
            }
        })

    }

    selectChange(ev){
        console.log(ev.label)
        this.setState({selectValue: ev.value, perguntaValue: ev.label})
        this.redirectPerguntaSearch(ev.value, ev.label)
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

        const getOptions = (input) => {
            return fetch('/forum')
              .then((response) => {
                return response.json();
              }).then((json) => {
                console.log(json)
                var results = []
                for(var i = 0; i < json.length; i++){
                    results.push({value: json[i].id, label: json[i].pergunta})
                }
                // console.log(results)
                return { options: results };
              });   
        }

        return(
            <div >
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
                    <br/>
                    <TextField
                            name="adress"
                            hintText="Proponha uma discussão"
                            fullWidth={true}
                            onChange={(ev) => this.proporValue(ev.target.value)}
                            
                    />

                    <RaisedButton
                        target="_blank"
                        label="Enviar"
                        primary={true}
                        backgroundColor = "#B39DDB"    
                        style={styles.button}
                        onClick={(ev) => this.enviarClicked(ev)}
                    />
                    <br/>
                    <br/>
                    <p>Procure por um assunto</p>
                        <Async
                            name="form-field-name"
                            value={this.state.selectValue}   
                            autoload={true}
                            loadOptions={getOptions}
                            onChange={(ev) => this.selectChange(ev)}
                            clearable={false}
                        />
                    <br/>
                    <br/>
                    <Paper zDepth={2}>
                        <Table onCellClick ={(ev) => this.redirectPergunta(ev)}>
                            <TableHeader adjustForCheckbox = {false} displaySelectAll = {false} style={{backgroundColor:'#9FA8DA', color: 'white',}}>
                            <TableRow >
                                {/* <TableHeaderColumn >Id da pergunta</TableHeaderColumn> */}
                                <TableHeaderColumn style={{backgroundColor:'#9FA8DA', color: 'black',}} >Perguntas</TableHeaderColumn>
                            </TableRow>
                            </TableHeader>
                           
                            <TableBody displayRowCheckbox = {false}>
                                {this.state.tableGeneralRows}
                            </TableBody>
                        </Table>
                    </Paper>
                    </div>
                    
                </div>
                
            </div>
        )
        };
        
}
export default Forum;