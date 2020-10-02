import React, { Component } from "react";
import FormTodo from "./FormTodo";
import ListTodos from "./ListTodos";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    addTodo(formDescription, formPriority) {
        let allTodos = this.state.todos;
        let nextId = allTodos.length + 1;
        allTodos.push({
            todo : {
                id : nextId,
                date : new Date().toLocaleString(),
                description : formDescription,
                priority : formPriority,
                completed : false
            }
        });
        this.setState({
            todos: allTodos
        })
    }

    completeTodo(todoId) {
        let allTodos = this.state.todos;
        let completedTodo = allTodos.find(item => item.todo.id === todoId);
    }

    render() {
        return (
            <div>
                <h1>My first React app</h1>
                <h2>Todo App</h2>
                <FormTodo addTodo={ this.addTodo } />
                <ListTodos
                    todos={ this.state.todos }
                    completeTodo={ this.completeTodo }
                />
            </div>
        );
    }
}
