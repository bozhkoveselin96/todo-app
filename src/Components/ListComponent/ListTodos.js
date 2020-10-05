import React, { Component } from "react";
import "./ListTodos.css"

export default class ListTodos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos : props.todos };
        this.onComplete = this.onComplete.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onComplete(index) {
        this.props.completeTodo(index);
    }

    onRemove(index) {
        this.props.removeTodo(index);
    }

    onEdit(index) {
        let allTodos = this.state.todos;
        let todoToEdit = allTodos[index].todo;
        todoToEdit.editMode = 'on';
        allTodos[index].todo.editMode = todoToEdit.editMode;
        this.setState({ todos : allTodos } );
        console.log(this.state)
        // this.props.getTodoToEdit(index);
    }

    onDescriptionChange(index, event) {
        let allTodos = this.state.todos;
        let todoToEdit = allTodos[index].todo;
        todoToEdit.description = event.target.value;
        allTodos[index].todo.description = todoToEdit.description;
        this.setState({ todos : allTodos } );
    }

    render() {
        this.state.todos.map(item => {
            if (item.todo.editMode === undefined) {
                item.todo.editMode = 'off';
            }
        });
        let todos = this.state.todos;
        return (
            <div className="todos">
                { todos.map((item, index) =>
                    <div key={ index } className={`todo-item ${ String(item.todo.completed) }`}>
                        <p className="date">{ item.todo.date }</p>
                        <hr/>
                        Description:<input
                            type="text"
                            className="description"
                            value={ item.todo.description }
                            onChange={ event => this.onDescriptionChange(index, event) }
                    />
                        <p className="priority">
                            Priority: <span className={ item.todo.priority }>
                                            { item.todo.priority }
                                      </span>
                        </p>
                        <div className={ item.todo.editMode }>
                            <button onClick={ () => this.onComplete(index) }>Complete</button>
                            <button onClick={ () => this.onRemove(index) }>Delete</button>
                            <button onClick={ () => this.onEdit(index) }>Edit</button>
                        </div>
                        <div className={ () => (item.todo.editMode === 'on') ? 'off' : 'on' }>
                            <button onClick={ () => this.onSave(index) }>Save</button>
                            <button onClick={ () => this.onCancel(index) }>Cancel</button>
                        </div>
                    </div>) }
            </div>
        );
    }
}
