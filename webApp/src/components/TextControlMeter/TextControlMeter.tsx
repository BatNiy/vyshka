/// <reference path="../index.d.ts" />
import React = require("react");
import {
    IBaseVisualComponentProps,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";
import {
    AbstractInputComponent, typeInputComponent,
    validationState
} from "../AbstractInputComponent/AbstractInputComponent";
import {InputGroup} from "react-bootstrap";


export interface ITextControlState extends IBaseVisualComponentState {
}

export interface ITextControlProps extends IBaseVisualComponentProps {
}

export class TextControlMeter extends AbstractInputComponent<ITextControlProps, ITextControlState> {
    protected lable(): React.ReactElement<any> {
        let name = this.DT.value("name") || "Текстовый контрол";
        return <span>{name}</span>;
    }

    protected type(): typeInputComponent {
        return "number";
    }

    protected getValidationState(): validationState {
        return null;
    }

    protected before(): React.ReactElement<any>|React.ReactElement<any>[] {
        return [];
    }

    protected after(): React.ReactElement<any>|React.ReactElement<any>[] {
        return [<InputGroup.Addon>м</InputGroup.Addon>];
    }

}

export {TextControlMeter as Control}
