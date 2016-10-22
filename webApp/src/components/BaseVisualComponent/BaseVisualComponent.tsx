/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";

export interface IBaseVisualComponentState {
    dataTransfer?: DataTransfer;
}

export interface IBaseVisualComponentProps {
    data: IDataFromServer;
    key: string;
}

export abstract class BaseVisualComponent<P extends IBaseVisualComponentProps, S extends IBaseVisualComponentState> extends Component<P, S> {
    constructor(props: P) {
        super(props as P);
        this.state = {} as S;
        if (props.data) {
            this.state.dataTransfer = new DataTransfer(props.data);
        }
    }

    protected abstract renderComponent(): React.ReactElement<any>;

    protected loadingComponentWait(): React.ReactElement<any> {
        return (
            <span key={this.props.key}>Загрузка...</span>
        );
    };

    render() {
        if (this.state.dataTransfer) {
            return this.renderComponent();
        }
        return this.loadingComponentWait();
    }

    getVal(ident: string, notArr?: boolean) {
        return this.state.dataTransfer.value(ident, notArr);
    }
}