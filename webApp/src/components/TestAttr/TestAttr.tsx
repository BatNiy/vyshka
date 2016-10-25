/// <reference path="../index.d.ts" />
import React = require("react");
import {
    IBaseVisualComponentProps, BaseVisualComponent,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

export interface ITestAttrState extends IBaseVisualComponentState {

}

export interface ITestAttrProps extends IBaseVisualComponentProps {
}

export class TestAttr extends BaseVisualComponent<ITestAttrProps, ITestAttrState> {

    protected renderComponent() {
        return (
            <div>
                <span>Не разбеетесь,</span> <span>{this.getVal("vana")},{this.getVal("niaz")}!!!!</span>
            </div>
        );
    }

    get cols() {
        return this.state.dataTransfer.type["cols"];
    }
}

export {TestAttr as Control}