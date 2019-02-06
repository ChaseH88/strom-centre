import React, { Component, Fragment } from "react";

class FormBuilderInput extends Component {
    state = {
        element: "input",
        name: "",
        type: "",
        description: "",
        properties: {
            required: false
        }
    }
    
    // Sets required to true on user input
    addRequired = (e) => {
        let input = JSON.parse(e.target.value);
        this.setState({
            properties: {
                required: input
            }
        });
    }

    render(){
        return (
            <Fragment>
                <div className="formElement">
                    <label>Element Name: </label>
                    <input type="text" name="inputName" />
                </div>
                <div className="formElement">
                    <label>Element Description: </label>
                    <input type="text" name="inputDescription" />
                </div>
                <div className="formElement">
                    <label>Element Value: </label>
                    <input type="text" name="inputValue" />
                </div>
                <div className="formElement">
                    <label>Element Type: </label>
                    <select name="inputElement">
                        <option defaultChecked value="input">Text</option>
                    </select>
                </div>

                <div className="formElement">
                    <label>Placeholder:</label><br />
                    <label>No:<input type="radio" name="placeholder" value="false" defaultChecked /></label>
                    <label>Yes:<input type="radio" name="placeholder" value="true" /></label>
                </div>

                <div className="formElement">
                    <label>Required:</label><br />
                    <label>No:<input onChange={this.addRequired} type="radio" name="required" value="false" defaultChecked /></label>
                    <label>Yes:<input onChange={this.addRequired} type="radio" name="required" value="true" /></label>
                </div>
            </Fragment>
        )
    }
}
export default FormBuilderInput;