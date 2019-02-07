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
            {id: 1, name: "Input - Text", elementType: "input", description: "Enter Text", value: "text", type: "text", added: false, order: 1},
            {id: 2, name: "Input - Number", elementType: "input", description: "Enter Number", value: "number", type: "number", added: false, order: 1},
            {id: 3, name: "Input - Date", elementType: "input", description: "Enter Date", value: "date", type: "date", added: false, order: 1},
            {id: 4, name: "Textarea", elementType: "textarea", description: "Blank Textarea", value: "team", type: "text", added: false, order: 1},
            {id: 5, name: "Checkbox", elementType: "input", description: "Radio Button", value: "", type: "checkbox", added: false, order: 1},
            {id: 6, name: "Radio Button", elementType: "input", description: "Radio Button", value: "", type: "radio", added: false, order: 1},
            {id: 7, name: "Submit Button", elementType: "input", description: "Radio Button", value: "", type: "submit", added: false, order: 1}
        ]
    }

    // DRAG AND DROP
    // store the temp data while dragging
    onDragStart = (e, id) => {
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
        // Builds out the html depending on if it has been added or not
        this.state.formElements.forEach((elem) => {
            // FALSE
            if(elem.added == false){
                inputs[elem.added].push(
                    <div onDragStart={(e) => this.onDragStart(e, elem.id)}
                        draggable key={elem.id} 
                        className="draggableItem"
                    >{elem.name}</div>
                )
            // TRUE
            } else {
                // Create the element
                let element = React.createElement(elem.elementType, {
                    type: elem.type,
                    name: elem.value,
                    placeholder: elem.description,
                    id: elem.value
                });
                inputs[elem.added].push(
                    <div onDragStart={(e) => this.onDragStart(e, elem.id)}
                        draggable key={elem.id} 
                        className="draggableItem"
                    >
                        {// Add the dynamic element to the page
                            element
                        }
                    </div>
                )   
            }
        });

        return (
            <div id="formBuilder">
                <div className="container">
                    <div className="left">
                        <div className="inputDragArea" 
                            onDragOver={(e) => this.onDragOver(e)}
                            onDrop={(e)=> this.onDrop(e, false)}>
                            {inputs.false}
                        </div>
                        <div className="controls">
                            <button onClick={this.addInput}>+</button>
                            <button onClick={this.removeInput}>-</button>
                        </div>
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