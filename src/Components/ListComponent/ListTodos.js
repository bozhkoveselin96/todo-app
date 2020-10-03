import React, { Component } from "react";
import "./ListTodos.css"

export default class ListTodos extends Component {
    constructor(props) {
        super(props);
        this.completeTodo = this.onComplete.bind(this);
        this.removeTodo = this.onRemove.bind(this);
    }

    onComplete(index) {
        this.props.completeTodo(index);
    }

    onRemove(index) {
        this.props.removeTodo(index);
    }

    render() {
        let todos = this.props.todos || [];
        return (
            <div className="todos">
                { todos.map((item, index) =>
                    <div key={ index } className={`todo-item ${String(item.todo.completed)}`}>
                        <p className="date">{ item.todo.date }</p>
                        <hr/>
                        <p className="description">Description: { item.todo.description }</p>
                        <p className="priority">
                            Priority: <span className={ item.todo.priority }>
                                            { item.todo.priority }
                                      </span>
                        </p>
                        <div>
                            <button onClick={ () => this.onComplete(index) }>Complete</button>
                            <button onClick={ () => this.onRemove(index) }>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>) }
            </div>
        );
    }
}
