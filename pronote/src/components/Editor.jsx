import { Component } from "react";
import '../App.css'

export default class Editor extends Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            value : '' 
        };
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    {/* call the handleChanges method in the onChange event and set the default value as empty */}
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
        )
    }
}