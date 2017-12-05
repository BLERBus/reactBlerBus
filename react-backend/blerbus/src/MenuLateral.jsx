import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Forum from 'material-ui/svg-icons/communication/forum';
import Poll from 'material-ui/svg-icons/social/poll';
import Feedback from 'material-ui/svg-icons/action/feedback';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
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
    exitClicked(ev){
        localStorage.setItem("user", "")
        window.location.reload()
    }
    forumClicked(ev){
        this.props.setCurrentPage("Forum")
    }
    
    render(){
        const styles = {
            button: {
              margin: 12,
              width: '60%',

            },
            button2: {
                margin: 12,
                width: '60%',
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
                <p>Bem Vindx, {this.props.user}</p>

                <RaisedButton
                        target="_blank"
                        label="Forum"
                        backgroundColor="#9FA8DA"
                        style={styles.button}
                        icon={<Forum />}
                        onClick={(event) => this.forumClicked(event)}
                        
                />
                <RaisedButton
                        target="_blank"
                        label="Status"
                        backgroundColor="#9FA8DA"
                        style={styles.button}
                        icon={<Poll />}
                        onClick={(event) => this.statusClicked(event)}             
                />
                <RaisedButton
                        target="_blank"
                        label="Avaliar"
                        backgroundColor="#9FA8DA"
                        style={styles.button}
                        icon={<Feedback />}
                        onClick={(event) => this.avaliarClicked(event)}
                        
                />
                <RaisedButton
                        target="_blank"
                        label="Sair"
                        backgroundColor="#f44336"
                        style={styles.button2}
                        icon={<Exit />}
                        onClick={(event) => this.exitClicked(event)}
                        
                />

            </div>
        )
    }
}

export default MenuLateral;
