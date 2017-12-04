import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Cadastrar extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleClick(ev){
        fetch('/cadastro', {
            method: 'POST',
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(callback => {
            console.log(callback)
            if(callback.status === "200"){
                this.props.onLogin(callback.user)
                localStorage.setItem("user", callback.user)
            }
        })

    }
    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            <TextField
                hintText="Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                />
            <br/>
            <TextField
            type="password"
            hintText="Senha"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <TextField
            type="password"
            hintText="Repita sua Senha"
            floatingLabelText="Repita sua Senha"
            />
            <br/>
                <RaisedButton label="Cadastrar" style={style} primary={true}  onClick={(event) => this.handleClick(event)} />
                
            </div>
            </MuiThemeProvider>
        </div>
        );
    }
    }
    const style = {
        margin: 15,
    };

    export default Cadastrar;