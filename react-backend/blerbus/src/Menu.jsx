import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }   

    render(){
        return(
            <div>
                <AppBar
                    title="A que ponto chegamos ?"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <h1>Welcome {this.props.user}</h1>
                <RaisedButton label="Logout"  onClick={this.props.logOut} />
            </div>
        )
    }
}
export default Menu;