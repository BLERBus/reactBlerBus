import React, { Component } from 'react';
import './App.css';
import Login from './Login.jsx';
import Menu from './Menu.jsx';
import './css/materialize.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user : localStorage.getItem("user")
    }
  }

  onLogin = (user) => {
    this.setState({ user : user })
  }

  logOut = () => {
    console.log("Logged Out")
    localStorage.setItem("user", "");
    this.setState({"user": ""})
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? <Menu user = {this.state.user} logOut={this.logOut} /> : <Login onLogin={this.onLogin}/> }
      </div>
    );
  }
}

export default App;