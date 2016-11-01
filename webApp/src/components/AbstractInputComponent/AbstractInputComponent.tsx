/// <reference path="../index.d.ts" />
import React = require("react");
import {FormGroup, InputGroup, FormControl} from "react-bootstrap";
// let ControlLabel = require("~");
import {
    BaseVisualComponent, IBaseVisualComponentProps,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";
import "./AbstractInputComponent.less";
import {Generator} from "../../baseDataLogic/RandomGenerator";

export type validationState = 'success'| 'warning' | 'error' | '';
export type bsSize = "lg" | "large" | "sm" | "small" | '';
export type typeInputComponent = 'text'| 'email' | "number" | string;

export interface IAbstractInputComponentState extends IBaseVisualComponentState {
}

export interface IAbstractInputComponentProps extends IBaseVisualComponentProps {
}

export abstract class AbstractInputComponent<P extends IAbstractInputComponentProps, S extends IAbstractInputComponentState> extends BaseVisualComponent<P, S> {
    id: string;

    constructor(props: P) {
        super(props as P);
        this.id = Generator.ShortId();
    }

    protected abstract lable(): React.ReactElement<any>;

    protected abstract type(): typeInputComponent;

    protected abstract getValidationState(): validationState;

    protected abstract before(): React.ReactElement<any> | React.ReactElement<any>[];

    protected abstract after(): React.ReactElement<any> | React.ReactElement<any>[];

    protected placeholder(): string {
        return "Введите значение";
    };

    protected valueIdent(): string {
        return "value";
    }

    protected handleChange(event: Event) {
        let value = (event.target as HTMLInputElement).value;
        this.set(this.valueIdent(), value);
    };

    protected value() {
        return this.DT.value(this.valueIdent());
    }

    protected size(): bsSize {
        return "lg";
    }

    renderComponent() {
        return (
            <FormGroup controlId={this.id} validationState={this.getValidationState()} bsClass="attr-input"
                       bsSize={this.size()}>
                <label htmlFor={this.id} className="control-label">{this.lable()}</label>
                <InputGroup>
                    {this.before()}
                    <FormControl type={this.type()} placeholder={this.placeholder()} value={this.value()}
                                 onChange={(e: Event) => this.handleChange(e)}/>
                    {this.after()}
                </InputGroup>
                <FormControl.Feedback />
            </FormGroup>
        );
    }
}
