import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TextField from 'material-ui/TextField';
import { Async } from 'react-select';
import "./Menu.css";

class Avaliar extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectValue: '',
            linhaValue:'',
            adressValue: '',
            time: '',
            statusValue:'',
        }
    }

    
    selectChange(ev){
        console.log(ev.label)
        this.setState({selectValue: ev.value, linhaValue: ev.label})
    }
    adressChange(value){
        console.log(value)
        this.setState({"adressValue": value})
    }

    getTime (){
        var currentdate = new Date(); 
        // var datetime = "Last Sync: " + currentdate.getDate() + "/"
        //                 + (currentdate.getMonth()+1)  + "/" 
        //                 + currentdate.getFullYear() + " @ "  
        //                 + currentdate.getHours() + ":"  
        //                 + currentdate.getMinutes() + ":" 
        //                 + currentdate.getSeconds();
        return currentdate.toString();
    }

    avaliar(ev){
        fetch('/getLinhas', {
            method: 'POST',
            body: JSON.stringify({
                "linha": this.state.linhaValue,
                "rua": this.state.adressValue,
                "status": this.state.statusValue,
                "hour": this.getTime()
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(callback => {
            console.log(callback)
            alert("Obrigado, quanto mais avaliações, mais apurada são nossas informações")
            this.props.setCurrentPage("Status")
        })
        // this.props.setCurrentPage("Status")
    }

    statusChange(ev){
        this.setState({statusValue: ev.target["id"]})
    }

    render(){
       
        const getOptions = (input) => {
            return fetch('/getLinhas')
              .then((response) => {
                return response.json();
              }).then((json) => {
                console.log(json.result)
                json = json.result
                var results = []
                for(var i = 0; i < json.length; i++){
                    results.push({value: i, label: json[i].Denominacao_Provisoria})
                }
                return { options: results };
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
                    <div className="col s5">
                        <p>Em qual linha você está ? </p>
                        <Async
                            name="form-field-name"
                            value={this.state.selectValue}   
                            autoload={true}
                            loadOptions={getOptions}
                            onChange={(ev) => this.selectChange(ev)}
                            clearable={false}
                        />
                        <p>Como você classifica a situação da linha ?</p>
                        
                        <div className="radioButtons">
                            
                            <p>
                            <input className="with-gap" name="group1" type="radio" id="Vazio"  onChange={(ev) => this.statusChange(ev)} />
                            <label htmlFor="Vazio">Vazio</label>
                            </p>
                            <p>
                            <input className="with-gap" name="group1" type="radio" id="Medio" onChange={(ev) => this.statusChange(ev)} />
                            <label htmlFor="Medio">Medio</label>
                            </p>
                            <p>
                            <input className="with-gap" name="group1" type="radio" id="Lotado"  onChange={(ev) => this.statusChange(ev)} />
                            <label htmlFor="Lotado">Lotado</label>
                            </p>
                            <p>
                            <input className="with-gap"  name="group1" type="radio" id="SuperLotado" onChange={(ev) => this.statusChange(ev)} />
                            <label htmlFor="SuperLotado">SuperLotado</label>
                            </p>

                        </div>
                        
                        <RaisedButton label="Avaliar" onClick={(event) => this.avaliar(event)}/>

                    </div>
                    <div className="col s5">
                        <p>Em qual rua você pegou/pegará o ônibus ?</p>
                        <TextField
                            name="adress"
                            hintText=""
                            onChange={(ev) => this.adressChange(ev.target.value)}

                        /><br />
                        
                    <div>{this.getTime()}</div> 

                    </div>
                    </div>
            {/* <RaisedButton label="Logout"  onClick={this.props.logOut} /> */}
        </div>
        )
    }
}

export default Avaliar;