import React, {Component} from 'react';
import MenuLateral from './MenuLateral.jsx';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'material-ui-search-bar'
import { Async } from 'react-select';
import Paper from 'material-ui/Paper';  
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


class Status extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectValue: '',
            linhaValue: '',
            tableGeneralRows: [],
            tableSearchRows: [],
        };
    }

    getStatus(){
        fetch('/getStatus', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(callback => {
            let linhas = []
            for(var i = 0; i < Object.keys(callback).length; i++){
                let cor = ""
                if(Object.values(callback)[i] === "Vazio"){
                    cor = "#00FF7F"
                }
                if(Object.values(callback)[i] === "Medio"){
                    cor = "#FFD700"
                }
                if(Object.values(callback)[i] === "Lotado"){
                    cor = "#8B0000"
                }

                linhas.push(<TableRow key={i}>
                            <TableRowColumn style={{color: cor, textAlign: "center"}}>{Object.keys(callback)[i]}</TableRowColumn>
                            <TableRowColumn style={{color: cor, textAlign: "center"}}>{Object.values(callback)[i]}</TableRowColumn>
                            </TableRow>)
            }
            this.setState({tableGeneralRows: linhas})
            
        })
    }

    componentWillMount(){
        fetch('/updateTime', {
            method: 'GET'
        })
        this.getStatus()

    }
    
    selectChange(ev){
        console.log(ev.label)
        this.setState({selectValue: ev.value, linhaValue: ev.label})
        fetch('/getStatus', {
            method: 'POST',
            body: JSON.stringify({
                "linha": ev.label
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(callback => { 
            let search = []
            let cor = ""
            if(Object.values(callback)[0] === "Vazio"){
                cor = "#00FF7F"
            }
            if(Object.values(callback)[0] === "Medio"){
                cor = "#FFD700"
            }
            if(Object.values(callback)[0] === "Lotado"){
                cor = "#8B0000"
            }
            search.push(<TableRow key={"search"}>
                                <TableRowColumn style={{color: cor, textAlign: "center"}}>{Object.keys(callback)}</TableRowColumn>
                                <TableRowColumn style={{color: cor, textAlign: "center"}}>{Object.values(callback)}</TableRowColumn>
                                </TableRow>)
            this.setState({tableSearchRows: search})
        })

    }

    render(){
        const getOptions = (input) => {
            return fetch('/getLinhas')
              .then((response) => {
                return response.json();
              }).then((json) => {
                console.log(json.result)
                json = json.result
                var results = []
                for(var i = 0; i < json.length; i++){
                    results.push({value: i, label: json[i].Denominacao_Provisoria})
                }
                return { options: results };
              });
        }

        return(
            
            <div>
                <AppBar
                    style={{backgroundColor:'#9FA8DA', color: 'black',}}
                    title="A que ponto chegamos?"
                />
                <div className = "row"></div>
                <div className = "row">
                    <div className = "col s2">
                        <MenuLateral user = {this.props.user} setCurrentPage={this.props.setCurrentPage}/>
                    </div>
                    <div className = "col s8">
                        <p>Procure por uma Linha</p>
                    <Async
                        name="form-field-name"
                        value={this.state.selectValue}   
                        autoload={true}
                        loadOptions={getOptions}
                        onChange={(ev) => this.selectChange(ev)}
                        clearable={false}
                    />

                    <Paper zDepth={1}>
                    <Table style={{backgroundColor: "#F5F5F5"}}
                        selectable= {false}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            style={{backgroundColor:'#9FA8DA', color: 'black'}}
                        >
                        <TableRow>
                        <TableHeaderColumn style={{textAlign: "center", color:'black'}}>Linha</TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign: "center", color:'black'}}>Status</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                        {this.state.tableSearchRows}
                        </TableBody> 
                    </Table>
                    </Paper>

                    <br/>
                    <p>Status geral</p>

                    <Paper zDepth={3}>
                    <Table style={{backgroundColor: "#F5F5F5"}}
                        selectable= {false}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            style={{backgroundColor:'#9FA8DA', color: 'black'}}
                        >
                        <TableRow>
                            <TableHeaderColumn style={{textAlign: "center",color:'black'}}>Linha</TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: "center",color:'black'}}>Status</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                        {this.state.tableGeneralRows}
                        </TableBody> 
                    </Table>
                    </Paper>
                    
                    </div>
                    <div className = "col s2">
                    </div>
                </div>
                <div className = "row">
                    <div className = "col s2">
                    </div>
                    <div className = "col s8">
                    
                    </div>
                    <div className = "col s2">
                    </div>
                </div>
            </div>
        )
    }
}
export default Status;