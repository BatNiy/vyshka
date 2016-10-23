/// <reference path="../index.d.ts" />
import React = require("react");
import {Grid} from "react-bootstrap";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";
import {
    BaseVisualComponent, IBaseVisualComponentProps,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";

export interface IObjecWrapState extends IBaseVisualComponentState {
}

export interface IObjecWrapProps extends IBaseVisualComponentProps {
    params: {
        uuid: string
    };
}

export class ObjectWrap extends BaseVisualComponent<IObjecWrapProps, IObjecWrapState> {

    protected renderComponent() {
        let Control = this.RowComponent;
        let rows = this.rows.value;
        return (
            <Grid fluid={true} className={this.rootMod && "gridIn" || ""}>
                {rows.map((row, index) => {
                    return (
                        <Control data={row} key={index}/>
                    );
                })
                }
            </Grid>
        );
    }

    componentDidMount() {
        this.loadData(this.props.params.uuid);
    }

    // get rows() {
    //     // return this.state.dataTransfer;
    // }

    loadData(uuid: string) {
        console.log("Типо загрузил объект " + uuid);

        let attr: IDataFromServer = {
            typeIdent: "ТипДляБека",
            uuid: uuid + "drugoiCol",
            readOnly: false,
            type: {
                vana: {
                    baseType: "string",
                    value: ["Ваня"],
                },
                niaz: {
                    baseType: "string",
                    value: ["Нияз"]
                }
            }
        };

        let col6: IDataFromServer = {
            typeIdent: "ТипДляБека",
            uuid: uuid + "drugoiCol",
            readOnly: false,
            type: {
                width: {
                    baseType: "int",
                    value: [6]
                },
                NashPerviAtriboot: {
                    baseType: "VisualComponent",
                    jsIdent: "TestAttr",
                    value: [attr]
                },
                NashPerviAtriboot2: {
                    baseType: "VisualComponent",
                    jsIdent: "TestAttr",
                    value: [attr]
                }
            }
        };

        let dataRow: IDataFromServer = {
            typeIdent: "ТипДляБека",
            uuid: uuid + "drugoiRow",
            readOnly: false,
            type: {
                cols: {
                    baseType: "VisualComponent",
                    jsIdent: "ColControl",
                    value: [col6, col6],
                    multi: true
                }
            },
        };

        let data: IDataFromServer = {
            typeIdent: "ТипДляБека",
            uuid: uuid,
            readOnly: false,
            type: {
                Row: {
                    baseType: "VisualComponent",
                    jsIdent: "RowControl",
                    value: [dataRow, dataRow],
                    multi: true
                }
            },
        };
        let dataTr: DataTransfer = new DataTransfer(data);
        this.setState({dataTransfer: dataTr});
    }

    get rows() {
        return this.state.dataTransfer.type["Row"];
    }

    get RowComponent() {
        return DataTransfer.getCommponent(this.rows.jsIdent);
    }

    get rootMod(): boolean {
        return !!this.props.params;
    }
}

export {ObjectWrap as Control}