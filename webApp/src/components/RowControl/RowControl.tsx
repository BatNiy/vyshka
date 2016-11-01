/// <reference path="../index.d.ts" />
import React = require("react");
import {Row} from "react-bootstrap";
import "./RowControl.less";
import {DataTransfer} from "../../baseDataLogic/DataTransfer";

import {
    IBaseVisualComponentProps, BaseVisualComponent,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

export interface IRowControlState extends IBaseVisualComponentState {

}

export interface IRowControlProps extends IBaseVisualComponentProps {
}

export class RowControl extends BaseVisualComponent<IRowControlProps, IRowControlState> {

    protected renderComponent() {
        return (
            <Row className="row-conttol">
                {this.renderGroup("cols")}
            </Row>
        );
    }
}

export {RowControl as Control}