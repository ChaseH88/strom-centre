import React, { Component, Fragment } from "react";

class FormBuilderTextArea extends Component {
    state = {
        element: "textarea",
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
                <span>TEXTAREA</span>
            </Fragment>
        )
    }
}
export default FormBuilderTextArea;