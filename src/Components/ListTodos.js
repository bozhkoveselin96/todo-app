import React, { Component } from "react";

export default class ListTodos extends Component {
    render() {
        let todos = this.props.todos || [];
        return (
            <ol>
                { todos.map(todo => <li key={ todo.id }>{ todo.name }</li>) }
            </ol>
        );
    }
}
