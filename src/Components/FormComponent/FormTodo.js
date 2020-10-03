import React, { Component } from "react";
import "./FormTodo.css";

class FormTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            priority: 'LOW'
        };
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.description, this.state.priority);
    }

    onInputChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    onSelectChange(event) {
        this.setState({
            priority: event.target.value
        });
    }

    render() {
        return (
            <div className="add-todo-form">
                <h1 className="center">My first React app</h1>
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" placeholder="Enter a todo" onChange={ this.onInputChange }/>
                    <select onChange={ this.onSelectChange }>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>
                    <input type="submit" value="Add todo" />
                </form>
            </div>
        );
    }
}

export default FormTodo;