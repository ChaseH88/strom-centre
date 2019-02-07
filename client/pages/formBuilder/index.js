import React, { Component } from "react";

//Seed
import formElements from './seed';

//form elements
import {
    FormBuilderInput,
    FormBuilderTextArea
} from "./allElements";

class FormBuilder extends Component {
    state = {
        inputCount: 0,
        formElements
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

    // Removes unnecessary characters in name
    removeCharacters = (name) => {
        let n = name.toLocaleLowerCase()
        return n.replace(/\s/g, '');
    }

    editInput = (e) => {
        //
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
                inputs[false].push(
                    <div onDragStart={(e) => this.onDragStart(e, elem.id)}
                        draggable key={elem.id}
                        className="draggableItem"
                    >{elem.name}</div>
                )
            // TRUE
            if(elem.added == true){
                // Create the element
                let elementID = this.removeCharacters(elem.name)+elem.order;
                let element = React.createElement(elem.elementType, {
                    type: elem.type,
                    name: elem.value,
                    placeholder: elem.description,
                    id: elementID
                });
                inputs[elem.added].push(
                    <div onDragStart={(e) => this.onDragStart(e, elem.id)}
                        draggable key={elem.id}
                        on
                        className="draggableItem"
                    >
                        {// Add the dynamic element to the page
                            element
                        }
                        <a onClick={this.editInput}>Edit</a>
                        <a>Remove</a>
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