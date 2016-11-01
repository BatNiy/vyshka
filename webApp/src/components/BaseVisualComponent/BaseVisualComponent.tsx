/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import {IDataFromServer, DataTransfer, BaseTypesUnpaced} from "../../baseDataLogic/DataTransfer";

export interface IBaseVisualComponentState {
    dataTransfer?: DataTransfer ;
}

export interface IBaseVisualComponentProps {
    dataTransfer: DataTransfer;
    key: string;
}

export abstract class BaseVisualComponent<P extends IBaseVisualComponentProps, S extends IBaseVisualComponentState> extends Component<P, S> {
    constructor(props: P) {
        super(props as P);
        this.state = {} as S;
        if (props.dataTransfer) {
            this.state.dataTransfer = props.dataTransfer;
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

    getComponent(DT: DataTransfer) {
        return DataTransfer.getCommponent(DT.jsIdent);
    }

    getVal(ident: string) {
        return this.DT.value(ident);
    }

    protected set(ident: string, value: BaseTypesUnpaced) {
        let DT = this.DT.set(ident, value);
        this.setState({dataTransfer: DT} as any); //Хуйня какая то в TS с generic
    }

    protected get DT(): DataTransfer {
        return this.state.dataTransfer;
    }

    renderGroup(ident: string): Array<React.ReactElement<any>> {
        let group = this.DT.getGroup(ident);
        return group.map((dataTr, index) => {
            let Control = this.getComponent(dataTr);
            return (
                <Control dataTransfer={dataTr} key={index}/>
            );
        });
    }
}