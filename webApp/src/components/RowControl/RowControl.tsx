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
        let Control = this.ColComponent;
        let cols = this.cols.value;
        return (
            <Row className="row-conttol">
                {cols.map((row, index) => {
                    return (
                        <Control data={row} key={index}/>
                    );
                })
                }
            </Row>
        );
    }

    get cols() {
        return this.state.dataTransfer.type["cols"];
    }

    get ColComponent() {
        return DataTransfer.getCommponent(this.cols.jsIdent);
    }
}

export {RowControl as Control}