/// <reference path="../index.d.ts" />
///<reference path="../BaseVisualComponent/BaseVisualComponent.tsx"/>
import React = require("react");
import {Col} from "react-bootstrap";
import {DataTransfer, BaseTypes, IDataFromServer} from "../../baseDataLogic/DataTransfer";

import {
    IBaseVisualComponentProps, BaseVisualComponent,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

export interface IColControlState extends IBaseVisualComponentState {

}

export interface IColControlProps extends IBaseVisualComponentProps {
}

export class ColControl extends BaseVisualComponent<IColControlProps, IColControlState> {

    protected renderComponent() {
        let colWidth = this.width;
        return (
            <Col md={colWidth} xs={12} className="col-control">
                {this.renderGroup("attrs")}
            </Col>
        );
    }

    get width() {
        return this.DT.value("width") || 12;
    }
}

export {ColControl as Control}