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
        let children = this.visualComponents;
        return (
            <Col md={colWidth} xs={12} className="col-control">
                {children.map((child) => {
                    let Control = DataTransfer.getCommponent(child.jsIdent);
                    return (
                        <Control data={child.value[0]}/>
                    );
                })
                }
            </Col>
        );
    }

    get width() {
        return this.state.dataTransfer.value("width");
    }

    get visualComponents() {
        return this.state.dataTransfer.getVisualComponents(true);
    }

    // get ColComponent() {
    //     return DataTransfer.getCommponent(this.cols.jsIdent);
    // }
}

export {ColControl as Control}