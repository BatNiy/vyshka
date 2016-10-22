import React = require("react");
import {Component} from "react";
import "./LoginForm.less";
import {FormGroup, InputGroup, FormControl, Glyphicon, Button} from "react-bootstrap";


export interface ILoginFormProps {
}

export interface ILoginFormState {
}

export class LoginForm extends Component<ILoginFormProps, ILoginFormState> {
    render() {
        return (
            <form id="login-form">
                <div id="loginModal-Message">Email or password are invalid</div>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                        <FormControl type="email"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                        <FormControl type="password"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" bsStyle="success">Войти</Button>
                </FormGroup>
            </form>
        );
    }
}

