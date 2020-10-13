import React, { Component } from "react";
import FormTodo from "./FormComponent/FormTodo";
import ListTodos from "./ListComponent/ListTodos";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
    }

    addTodo = (formDescription, formPriority) => {
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
        });
    }

    toggleComplete = (todoIndex, status) => {
        this.setState(({ todos }) => {
            const allTodos = [ ...todos ];
            allTodos[todoIndex].todo.completed = !status;
            return { todos : allTodos };
        });
    }

    removeTodo = todoIndex => {
        this.setState(({ todos }) => {
            const allTodos = [ ...todos ];
            allTodos.splice(todoIndex,1);
            return { todos : allTodos };
        });
    }

    render() {
        return (
            <div>
                <FormTodo addTodo={ this.addTodo }/>
                <ListTodos
                    todos={ this.state.todos }
                    removeTodo={ this.removeTodo }
                    toggleComplete={ this.toggleComplete }
                />
            </div>
        );
    }
}
