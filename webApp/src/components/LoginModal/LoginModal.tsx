import React = require("react");
import {Component} from "react";
import "./LoginModal.less";
import {LoginForm} from "../LoginForm/LoginForm";
// import {FormGroup, InputGroup, FormControl, Glyphicon} from "react-bootstrap";

export interface ILoginModalProps {
}

export interface ILoginModalState {
}

export class LoginModal extends Component<ILoginModalProps, ILoginModalState> {
    render() {
        return (
            <div id="loginModal">
                <div className="loginModal-Header">SomTrack</div>
                <div className="loginModal-Body">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

