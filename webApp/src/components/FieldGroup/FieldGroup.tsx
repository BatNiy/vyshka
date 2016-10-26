/// <reference path="../index.d.ts" />
import React = require('react');
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";
import {FormGroup, FormControl} from "react-bootstrap";
// import {FormControl} from "~react-bootstrap/src/FormControl";

export interface IFieldGroupState {}

export interface IFieldGroupProps {
    id: string;
    text: string;
    placeholder: string;
    label: string;
}

export class FieldGroup extends Component<IFieldGroupProps, IFieldGroupState> {
    render() {
        return (
            <FormGroup controlId={this.props.id}>
                <div>{this.props.label || ""}</div>
                <FormControl componentClass="input" placeholder={this.props.placeholder || ""}/>
            </FormGroup>
        );
    }
}