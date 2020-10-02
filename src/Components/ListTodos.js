import React, { Component } from "react";
import "./ListTodos.css"

export default class ListTodos extends Component {
    constructor(props) {
        super(props);

        this.completeTodo = this.completeTodo.bind(this);
    }

    completeTodo(id) {
        this.props.completeTodo(id);
    }

    render() {
        let todos = this.props.todos || [];
        return (
            <div className="todos">
                { todos.map(item =>
                    <div key={ item.todo.id } className="todo-item">
                        <p className="date">{ item.todo.date }</p>
                        <hr/>
                        <p className="description">Description: { item.todo.description }</p>
                        <p className="priority">
                            Priority: <span className={ item.todo.priority }>
                                            { item.todo.priority }
                                      </span>
                        </p>
                        <div>
                            <button onClick={ () => this.completeTodo(item.todo.id) }>Complete</button>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>) }
            </div>
        );
    }
}
