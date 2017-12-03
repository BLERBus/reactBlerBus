import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

class Forum extends React.Component{
    constructor(){
        super()
        this.state ={
    
        };
    };

    _perguntas(){
   
    }

    render( ){
        return(
            <div>
                <AppBar
                        title="A que ponto chegamos ?"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div className="row"></div>
                <div className="row">
                    <div className="col s2" id="avatar">
                    <Avatar
                        src=""
                        size={60}
                    />
                    <p>Welcome {this.props.user}</p>
                    </div>
                </div>
            </div>
        )
        };
        
}
export default Forum;