import React, { Component } from "react";
import FormTodo from "./FormTodo";
import { v4 as uniqueId } from "uuid";

class Container extends Component {
    constructor() {
        super();
        this.state = {
            todos : []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(formDescription, formPriority) {
        let allTodos = this.state.todos;
        allTodos.push({
            todo: {
                id: uniqueId(),
                date: new Date().toLocaleString(),
                description: formDescription,
                priority: formPriority
            }
        });
        console.log(this.state)
    }

    render() {
        return (
            <FormTodo addTodo={ this.addTodo }/>
            // <ListTodos  />
        );
    }
}

export default Container;