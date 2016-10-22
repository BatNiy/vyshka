/// <reference path="../index.d.ts" />
import React = require("react");
import {
    IBaseVisualComponentProps, BaseVisualComponent,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

export interface IRequreFailState extends IBaseVisualComponentState {

}

export interface IRequreFailProps extends IBaseVisualComponentProps {
}

export class RequreFail extends BaseVisualComponent<IRequreFailProps, IRequreFailState> {
    protected renderComponent(): React.ReactElement<any> {
        return undefined;
    }

    render(): React.ReactElement<any> {
        return (
            <div>Компонент не загружен</div>
        );
    }
}

export {RequreFail as Control}