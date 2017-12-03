import React from 'react'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Table1 from './table.js';

class Forum extends React.Component{
    constructor(){
        super()
        this.state ={
            perguntas: {},
        };
    };

    componentWillMount(){
        fetch('/forum', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)

            //for (var i = 0; i < result.lenght; i++){
            //    console.log()
            //  }
        });   
    };

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
                
                <div className="col s5">
                <Table1/>
                </div>
            </div>
        )
        };
        
}
export default Forum;