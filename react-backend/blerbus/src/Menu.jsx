import React, {Component} from 'react';
import Avaliar from './Avaliar.jsx';
import Status from './Status.jsx';
import Forum from './Forum.jsx';
import Resposta from './Resposta.jsx';

//redirect react component to change, stay at Menu


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: "Forum",
            id: 0,
        }
    }

    
    setCurrentPage = (page) => {
        this.setState({currentPage: page})
    }

    forumToQuestion = (ev) => {
        this.setState({currentPage: "Resposta", id: ev})
    }     

    render(){
        if(this.state.currentPage == "Avaliar"){
            return(<Avaliar setCurrentPage={this.setCurrentPage}/>)
        }

        if(this.state.currentPage == "Forum"){
            return(<Forum forumToQuestion={this.forumToQuestion}/>)
        }

        if(this.state.currentPage == "Resposta"){
            return(<Resposta id = {this.state.id}/>)
        }

        if(this.state.currentPage == "Status"){
            return(<Status/>)   
        }
    }
}

export default Menu;