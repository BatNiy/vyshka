/// <reference path="../index.d.ts" />
import React = require("react");
    import {
    IBaseVisualComponentProps, BaseVisualComponent,
        IBaseVisualComponentState
    } from "../BaseVisualComponent/BaseVisualComponent";

export interface IMapState extends IBaseVisualComponentState{

}

export interface IMapProps extends IBaseVisualComponentProps {
}

export class Map extends BaseVisualComponent<IMapProps, IMapState> {
    protected renderComponent(): React.ReactElement<any> {
        return (
            <span>Типо карта</span>
        );
    }
}