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

        const getPerguntas = () => {
            return fetch('/forum')
              .then((response) => {
                return response.json();
              }).then((json) => {
                console.log(json.result)
                json = json.result
                //var results = []
                //for(var i = 0; i < json.length; i++){
                 //   results.push({value: i, label: json[i].perguntas})
                }
                return { perguntas: json};
              });
        }

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
                    <table>
                        <tr>
                            <td>{getPerguntas}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
        };
        
}
export default Forum;