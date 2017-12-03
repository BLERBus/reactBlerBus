import React, {Component} from 'react';
import Avaliar from './Avaliar.jsx';
import Status from './Status.jsx';
import Forum from './Forum.jsx';


//redirect react component to change, stay at Menu


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: "Avaliar",
        }
    }

    
    setCurrentPage = (page) => {
        this.setState({currentPage: page})
    }   

    render(){
        if(this.state.currentPage == "Avaliar"){
            return(<Avaliar setCurrentPage={this.setCurrentPage}/>)
        }

        if(this.state.currentPage == "Forum"){
            return(<Forum setCurrentPage={this.setCurrentPage}/>)

        }
        if(this.state.currentPage == "Status"){
            return(<Status/>)   
        }
    }
}

export default Menu;