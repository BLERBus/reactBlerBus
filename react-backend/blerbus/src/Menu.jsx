import React, {Component} from 'react';
import Avaliar from './Avaliar.jsx';
import Status from './Status.jsx';


//redirect react component to change, stay at Menu


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: "Status",
        }
    }

    
    setCurrentPage = (page) => {
        this.setState({currentPage: page})
    }   

    render(){
        if(this.state.currentPage === "Avaliar"){
            return(<Avaliar user = {this.props.user} setCurrentPage={this.setCurrentPage}/>)
        }
        if(this.state.currentPage === "Status"){
            return(<Status user = {this.props.user} setCurrentPage={this.setCurrentPage}/>)   
        }
    }
}

export default Menu;