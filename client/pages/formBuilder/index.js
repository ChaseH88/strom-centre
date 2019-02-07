import React, { Component } from "react";
//form elements
import {
    FormBuilderInput,
    FormBuilderTextArea
} from "./allElements";

class FormBuilder extends Component {
    state = {
        inputCount: 0,
        formElements: [
            {id: 1, name: "input", description: "this is a input", value: "firstName", type: "text", added: true},
            {id: 2, name: "input", description: "this is a input", value: "lastName", type: "text", added: false},
            {id: 3, name: "input", description: "this is a input", value: "email", type: "text", added: false}
        ]
    }

    // DRAG AND DROP
    // store the temp data while dragging
    onDragStart = (e, id) => {
        console.clear();
        console.log("Dragging:", id);
        e.dataTransfer.setData("id", id);
    }
    // removes default on element drop
    onDragOver = (e) => {
        e.preventDefault();
    }
    // gets the data that is being dragged
    onDrop = (e, added) => {
        let id = parseInt(e.dataTransfer.getData("id"));
        // Update the inputs object with new drop data
        let inputs = this.state.formElements.filter((elem) => {
            console.log(elem);
            console.log(id)
            if(elem.id === id){
                elem.added = added
            }
            return inputs;
        });
        // Update the state
        this.setState({
            ...this.state,
            inputs
        })
    }

    render(){
        // Declare empty arrays to push information into
        var inputs = {
            true: [],
            false: []
        }
        // Sort the elements based off of added or not to the builder
        this.state.formElements.forEach((elem) => {
            inputs[elem.added].push(
                <div onDragStart={(e) => this.onDragStart(e, elem.id)}
                    draggable key={elem.id} 
                    className="draggableItem"
                >{elem.name}</div>
            )
        });

        return (
            <div id="formBuilder">
                <div className="container">
                    <div className="left">
                        {inputs.false}
                        <button onClick={this.addInput}>Add Input</button>
                        <button onClick={this.removeInput}>Remove Input</button>
                    </div>
                    <div className="right">
                        <form className="creator">
                            <div className="dragArea"
                                onDragOver={(e) => this.onDragOver(e)}
                                onDrop={(e)=> this.onDrop(e, true)}>
                                {inputs.true}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormBuilder;