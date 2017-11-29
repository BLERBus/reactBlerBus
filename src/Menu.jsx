import React, {Component} from 'react';
// import {DropDownMenu, MenuItem} from 'material-ui';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Avatar from 'material-ui/Avatar';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            situation: [],
        }
      }

    //   handleChange = (selectedOption) => {
    //     console.log(selectedOption)
    //     this.setState({ value: selectedOption, situation: situation[Math.floor(Math.random()*situation.length)] })
    //   }

      

    render(){      
        const situation = [['Vazia', 'green'], ['Razoavel', 'yellow'], ['Cheia', 'red'], ['Superlotado', 'purple']]

        return(

            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass">Sass</a></li>
                        <li><a href="badges">Components</a></li>
                        <li><a href="collapsible">JavaScript</a></li>
                    </ul>
                    </div>
                </nav>
                <div className= "row">
                    <div className = "input-field col s3">
                            <Avatar
                                src="images/uxceo-128.jpg"
                                size={60}

                            />
                             <p>Nome de Usuario</p>
                    </div>
                    <div className="input-field col s6">
                        <p>Em qual linha você está ? </p>
                        <Select
                            name="form-field-name"
                            value={this.state.value}
                            removeSelected={this.state.removeSelected}
                            onChange={(ev) => {this.setState({value: ev.value, situation: situation[Math.floor(Math.random()*situation.length)]})}}
                            options={[
                                { value: 'one', label: 'One' },
                                { value: 'two', label: 'Two' },
                                { value: 'tw', label: 'tw' },
                                { value: 'twoooo', label: 'twoooo' },
                                { value: 'twoad', label: 'twoad' },
                                { value: 'twofh', label: 'twofh' },
                            ]}
                        />
                        <p> Situação da linha: </p>

                        <h4 style={{
                            color : this.state.situation[1]
                        }}>
                        {this.state.situation[0]}
                        </h4>
                        
                    
                    </div>
                    <div className = "input-field col s3">
                        <p>teste</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;