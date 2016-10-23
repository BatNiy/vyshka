/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";

export interface IObjecWrapState {
    data: DataTransfer;
}

export interface IObjecWrapProps {
    params: {
        uuid: string
    };
}

export class ObjectWrap extends Component<IObjecWrapProps, IObjecWrapState> {
    componentWillMount() {

        this.loadData(this.props.params.uuid);
    }

    loadData(uuid: string) {
        console.log("Типо загрузил объект " + uuid);
        let data: IDataFromServer = {
            jsIdent: "",
            uuid: uuid,
            readOnly: false,
            type: null,
        };
        this.setState({data: new DataTransfer(data)});
    }

    render() {
        return (
            <span>Основа</span>
        );
    }
}