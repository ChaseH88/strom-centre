import React, { Component } from "react";
//form elements
import {
    FormBuilderInput,
    FormBuilderTextArea
} from "./allElements";

class FormBuilder extends Component {
    state = {
        formElements: [{}],
        inputCount: 0
    }

    addInput = (e) => {
        e.preventDefault();
        let current = this.state.inputCount
        current++
        this.setState({
            inputCount: current
        });
        
    }
    removeInput = (e) => {
        e.preventDefault();
        let current = this.state.inputCount
        current--
        if (current < 0){current = 0}
        this.setState({
            inputCount: current
        });
    }

    render(){
        return (
            <div id="formBuilder">
                <div className="container">
                    <div className="left">
                    <button onClick={this.addInput}>Add Input</button>
                    <button onClick={this.removeInput}>Remove Input</button>
                    </div>
                    <div className="right">
                        <form className="creator">
                            <FormBuilderInput props={this.state.inputCount} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormBuilder;