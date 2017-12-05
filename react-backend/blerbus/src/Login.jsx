import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Cadastrar from './Cadastrar.jsx'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleClick(ev){
        fetch('/login', {
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
    handleClick(ev){
        fetch('/login', {
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

    // cadastrarClicked(ev) {
    //     this.props.setCurrentPage("")
    // }
    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            <AppBar
                style={{backgroundColor:'#9FA8DA', color: 'black',}}         
                title="A que ponto chegamos"
            />
            <div className="row">
            <div className="col s6">
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                />
            <br/>
                <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>

                
                <RaisedButton label="Login" style={style} primary={true}  onClick={(event) => this.handleClick(event)} />
                <br/>
                {/* Ou cadastre-se aqui <RaisedButton label="Cadastro" style={style} primary={true}  onClick={(event) => this.cadastrarClicked(event)} /> */}
            </div>
            <div className="col s6">
            <Cadastrar onLogin={this.props.onLogin}/>
            </div>
            </div>
            </div>
            </MuiThemeProvider>
        </div>
        );
    }
    }
    const style = {
    margin: 15,
    };
    export default Login;