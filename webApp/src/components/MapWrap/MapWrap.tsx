/// <reference path="../index.d.ts" />
import React = require("react");
import {
    IBaseVisualComponentProps, BaseVisualComponent,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

import {Map} from "../Map/Map";

export interface ITestAttrState extends IBaseVisualComponentState {

}

export interface ITestAttrProps extends IBaseVisualComponentProps {
}

export class MapWrap extends BaseVisualComponent<ITestAttrProps, ITestAttrState> {

    protected renderComponent() {
        return (
            <div style={{height: 300, width: "100%"}}>
                <Map/>
            </div>
        );
    }

    get cols() {
        return this.state.dataTransfer.type["cols"];
    }
}

export {MapWrap as Control}