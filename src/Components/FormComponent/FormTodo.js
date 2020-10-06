import React, { Component } from "react";
import "./FormTodo.css";
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

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
            <Card className="add-todo-form">
                <CardContent className="add-todo-form-content">
                    <Typography variant={ "h5" } className="center"><b>My first React app</b></Typography>
                    <form onSubmit={ this.onFormSubmit }>
                        <TextField className="enter-todo" label="Enter a todo" onChange={ this.onInputChange }/>
                        <FormControl className="select-priority">
                            <InputLabel htmlFor="priority-customized-select-native">Priority</InputLabel>
                            <NativeSelect id="priority-customized-select-native">
                                <option aria-label="None" value="" />
                                <option value="LOW">LOW</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HIGH">HIGH</option>
                            </NativeSelect>
                        </FormControl>


                        <CardActions>
                            <Button variant="contained" color="primary" type="submit">Add todo</Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default FormTodo;