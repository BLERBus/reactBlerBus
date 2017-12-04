import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Forum from 'material-ui/svg-icons/communication/forum';
import Poll from 'material-ui/svg-icons/social/poll';
import Feedback from 'material-ui/svg-icons/action/feedback';
import './css/material-icons.min.css';

class MenuLateral extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    avaliarClicked(ev){
        this.props.setCurrentPage("Avaliar")
    }
    statusClicked(ev){
        this.props.setCurrentPage("Status")
    }
    render(){
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

        return(
            <div>
                <Avatar
                    src=""
                    size={60}
                />
                <p>Seja bem vindo, {this.props.user}</p>

                <RaisedButton
                        target="_blank"
                        label="Forum"
                        secondary={true}
                        style={styles.button}
                        icon={<Forum />}
                        
                />
                <RaisedButton
                        target="_blank"
                        label="Status"
                        secondary={true}
                        style={styles.button}
                        icon={<Poll />}
                        onClick={(event) => this.statusClicked(event)}             
                />
                <RaisedButton
                        target="_blank"
                        label="Avaliar"
                        secondary={true}
                        style={styles.button}
                        icon={<Feedback />}
                        onClick={(event) => this.avaliarClicked(event)}
                        
                />
            </div>
        )
    }
}

export default MenuLateral;
