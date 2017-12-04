import React, {Component} from 'react';
import Avaliar from './Avaliar.jsx';
import Status from './Status.jsx';
import Cadastrar from './Cadastrar.jsx';
import Forum from './Forum.jsx';
import Resposta from './Resposta.jsx';


//redirect react component to change, stay at Menu


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: "Forum",
            id: 0,
            question: "",
        }
    }

    
    setCurrentPage = (page) => {
        this.setState({currentPage: page})
    }

    forumToQuestion = (ev, question) => {
        console.log(question)
        this.setState({currentPage: "Resposta", id: ev, question: question})
    }

    render(){
        if(this.state.currentPage === "Avaliar"){
            return(<Avaliar user = {this.props.user} setCurrentPage={this.setCurrentPage}/>)
        }

        if(this.state.currentPage === "Status"){
            return(<Status user = {this.props.user} setCurrentPage={this.setCurrentPage}/>)   
        }

        if(this.state.currentPage === "Cadastrar"){
            return(<Cadastrar/>)   
        }

        if(this.state.currentPage == "Forum"){
            return(<Forum user = {this.props.user} setCurrentPage={this.setCurrentPage} forumToQuestion={this.forumToQuestion}/>)
        }

        if(this.state.currentPage == "Resposta"){
            return(<Resposta user = {this.props.user} forumToQuestion={this.forumToQuestion} id = {this.state.id} question={this.state.question}/>)
        }
    }
}

export default Menu;