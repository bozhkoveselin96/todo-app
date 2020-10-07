import React, { Component } from "react";
import "./ListTodos.css";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/DoneOutline';
import UndoIcon from '@material-ui/icons/Undo';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

export default class ListTodos extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    onRemove(index) {
        this.props.removeTodo(index);
    }

    onToggle(index, status) {
        this.props.toggleComplete(index, status);
    }

    render() {
        let todos = this.props.todos || [];
        return (
            <div className="todos">
                { todos.map((item, index) =>
                    <Card key={ index } className={`todo-item `}>
                        <CardContent className={ String(item.todo.completed) }>
                            <Typography variant={ "h6" } className="date">
                                { item.todo.date }
                            </Typography>
                            <hr/>
                            <Typography variant={ "h5" }>
                                <b>Description: </b>
                                <span className="description">
                                    { item.todo.description }
                                </span>
                                <p className="priority">
                                    <b>Priority: </b>
                                    <span className={ item.todo.priority }>
                                        { item.todo.priority }
                                    </span>
                                </p>
                            </Typography>
                        </CardContent>
                        <CardActions className="card-actions">
                            <Button variant="contained" color="primary" onClick={ () => this.onToggle(index, item.todo.completed) }>
                                <DoneIcon className={`${ String(!item.todo.completed) }-completed`} />
                                <UndoIcon className={`${ String(item.todo.completed) }-completed`} />
                            </Button>
                            <Button variant="contained" color="secondary" onClick={ () => this.onRemove(index) }><DeleteIcon /></Button>
                        </CardActions>
                    </Card>) }
            </div>
        );
    }
}
