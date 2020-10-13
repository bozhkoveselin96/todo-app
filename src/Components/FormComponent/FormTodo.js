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

export default class FormTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                description: "",
                priority: ""
            },
            errors : {}
        };
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Description
        if (!fields.description) {
            formIsValid = false;
            errors.description = "Description is required!";
        } else if (typeof fields.description !== "undefined") {
            if (!fields.description.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.description = "Description must have only letters!";
            }
        }

        // Priority
        if (fields.priority === "") {
            formIsValid = false;
            errors.priority = "Priority must be LOW, MEDIUM or HIGH!";
        }
        this.setState({ errors: errors } );
        return formIsValid;
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (this.handleValidation()) {
            this.props.addTodo(this.state.fields.description, this.state.fields.priority);
        }
    }

    onInputChange = event => {
        let fields = this.state.fields;
        fields.description = event.target.value;
        this.setState({ fields });
    }

    onSelectChange = event => {
        let fields = this.state.fields;
        fields.priority = event.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <Card className="add-todo-form">
                <CardContent className="add-todo-form-content">
                    <Typography variant={ "h5" } className="center"><b>My first React app</b></Typography>
                    <form onSubmit={ this.onFormSubmit }>
                        <TextField className="enter-todo" label="Enter a todo" onChange={ this.onInputChange }/>
                        <div className="errors">{ this.state.errors.description }</div>
                        <FormControl className="select-priority">
                            <InputLabel htmlFor="priority-customized-select-native">Priority</InputLabel>
                            <NativeSelect id="priority-customized-select-native" onChange={ this.onSelectChange }>
                                <option aria-label="None" value="" />
                                <option value="LOW">LOW</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HIGH">HIGH</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="errors">{ this.state.errors.priority }</div>
                        <CardActions>
                            <Button
                                className="add-todo-btn"
                                variant="contained"
                                color="primary"
                                type="submit">Add todo</Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        );
    }
}
