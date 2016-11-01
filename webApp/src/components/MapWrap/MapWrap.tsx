/// <reference path="../index.d.ts" />
import "./MapWrap.less";
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
            <div className="map-wrap">
                <label>{this.DT.value('name')}</label>
                <Map dots ={this.DT.getGroup("dots")}/>
            </div>
        );
    }

    get cols() {
        return this.state.dataTransfer.type["cols"];
    }
}

export {MapWrap as Control}