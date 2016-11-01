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

export interface ITextControlState extends IBaseVisualComponentState {
}

export interface ITextControlProps extends IBaseVisualComponentProps {
}

export class TextControl extends AbstractInputComponent<ITextControlProps, ITextControlState> {
    protected lable(): React.ReactElement<any> {
        let name = this.DT.value("name") || "Текстовый контрол";
        return <span>{name}</span>;
    }

    protected type(): typeInputComponent {
        return "text";
    }

    protected getValidationState(): validationState {
        return null;
    }

    protected before(): React.ReactElement<any>|React.ReactElement<any>[] {
        return [];
    }

    protected after(): React.ReactElement<any>|React.ReactElement<any>[] {
        return [];
    }

}

export {TextControl as Control}
