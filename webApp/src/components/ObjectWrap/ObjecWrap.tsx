/// <reference path="../index.d.ts" />
import React = require("react");
import {Grid, Row, Jumbotron} from "react-bootstrap";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";
import {
    BaseVisualComponent, IBaseVisualComponentProps,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";
import PubSub = require('pubsub-js');
import {IActonList} from "../LeftSidebar/LeftSidebar";
import {SysApi} from "../../baseDataLogic/SysApi";
import {Notificator} from "../../app/Notificator";


export interface IObjecWrapState extends IBaseVisualComponentState {
    showFalse?: boolean;
}

export interface IObjecWrapProps extends IBaseVisualComponentProps {
    params: {
        uuid: string
    };
}

export class ObjectWrap extends BaseVisualComponent<IObjecWrapProps, IObjecWrapState> {

    protected renderComponent() {
        if (!this.state.showFalse) {
            return (
                <Grid fluid={true} className={this.rootMod && "gridIn" || ""}>
                    {this.renderGroup("rows")}
                </Grid>
            );
        }else {
            return (<Grid fluid={true} className="gridIn">
                <Row>
                    <Jumbotron>
                        <h1>Объект не найден</h1>
                    </Jumbotron>
                </Row>
            </Grid>);
        }
    }

    componentDidMount() {
        if (this.rootMod) {
            this.loadData(this.props.params.uuid);
        }
    }

    componentWillUnmount() {
        if (this.rootMod) {
            PubSub.publish<string>("sidebar.deleteBtnList", this.actionList.uuid);
        }
    }

    get actionList(): IActonList {
        return {
            uuid: "objWrapList" + this.objectUuid,
            renderList: [<span className="btn-element-control glyphicon glyphicon-floppy-saved"
                               onClick={() => this.saveObject()}/>
            ]
        };
    }

    get objectUuid() {
        if (this.rootMod) {
            return this.props.params.uuid;
        } else {
            return this.state.dataTransfer.uuid;
        }
    }

    saveObject() {
        SysApi.saveObject(this.DT).then(() => {
            Notificator.success("Изменения сохранены");
        });
    }

    loadData(uuid: string) {
        SysApi.loadObject(uuid).then((obj) => {
            let dataTr: DataTransfer = new DataTransfer(obj);
            this.setState({dataTransfer: dataTr});
            if (!dataTr.readOnly) {
                PubSub.publish<IActonList>("sidebar.addBtnList", this.actionList);
            }
        }).catch(() => {
            console.log("yt yfqlty");
            Notificator.error("бъект не найден");
            this.setState({dataTransfer: true as any, showFalse: true});
        });
    }

    get rows() {
        return this.DT.getGroup("rows");
    }

    get rootMod(): boolean {
        return !!this.props.params;
    }
}

export {ObjectWrap as Control}