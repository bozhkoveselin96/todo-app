import React, { Component } from "react";
import FormTodo from "./FormComponent/FormTodo";
import ListTodos from "./ListComponent/ListTodos";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
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

    completeTodo(todoIndex) {
        this.setState(({ todos }) => {
            const allTodos = [ ...todos ];
            allTodos[todoIndex].todo.completed = true;
            return { todos : allTodos };
        });
    }

    removeTodo(todoIndex) {
        this.setState(({ todos }) => {
            const allTodos = [ ...todos ];
            allTodos.splice(todoIndex,1);
            return { todos : allTodos };
        });
    }

    render() {
        return (
            <div>
                <FormTodo addTodo={ this.addTodo } />
                <ListTodos
                    todos={ this.state.todos }
                    completeTodo={ this.completeTodo }
                    removeTodo={ this.removeTodo }
                />
            </div>
        );
    }
}
