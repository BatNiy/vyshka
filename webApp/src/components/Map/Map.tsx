/// <reference path="../index.d.ts" />
import React = require("react");
    import {IBaseVisualComponentProps, BaseVisualComponent} from "../BaseVisualComponent/BaseVisualComponent";

export interface IMapState {

}

export interface IMapProps extends IBaseVisualComponentProps {
}

export class Map extends BaseVisualComponent<IMapProps, IMapState> {

    render() {
        return (
            <span>Типо карта</span>
        );
    }
}