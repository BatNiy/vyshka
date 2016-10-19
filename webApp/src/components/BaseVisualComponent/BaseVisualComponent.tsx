/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";

export interface IBaseVisualComponentState {

}

export interface IBaseVisualComponentProps {
    data: IDataFromServer;
}

export class BaseVisualComponent<P extends IBaseVisualComponentProps, S extends IBaseVisualComponentState> extends Component<P, S> {
    dataTransfer: DataTransfer;

    constructor(props: P) {
        super(props as P);
        this.dataTransfer = new DataTransfer(props.data);
    }

    render() {
        return (
            <span/>
        );
    }
}