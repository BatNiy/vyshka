/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import {IDataFromServer} from "../../baseDataLogic/DataTransfer";

export interface IObjecWrapState {
    data: IDataFromServer;
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
        let date: IDataFromServer = {
            jsIdent: "",
            uuid: uuid,
            readOnly: false,
            type: null,
        };
        this.setState({data: date});
    }

    render() {
        return (
            <span>Основа</span>
        );
    }
}