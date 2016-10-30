/// <reference path="../index.d.ts" />
import React = require("react");
import PubSub = require("pubsub-js");
import {Component} from "react";
import "./LeftSideBar.less";

export interface ILeftSidebarProps {

}

export interface ILeftSidebarState {
    hidden?: boolean;
    actonList?: IActonList[];
}

export interface IActonList {
    uuid: string;
    renderList: React.ReactElement<any>[];
}

export class LeftSidebar extends Component<ILeftSidebarProps, ILeftSidebarState> {

    constructor(props: ILeftSidebarProps) {
        super(props);
        this.state = {
            hidden: true,
            actonList: [{
                uuid: "toggler",
                renderList: [<span className="btn-element-control glyphicon glyphicon-menu-hamburger"
                                   onClick={() => this.toggleBtn()}/>
                ]
            }]
        };
        PubSub.subscribe<IActonList>("sidebar.addBtnList", (ident, data) => this.addActionList(data));
        PubSub.subscribe<string>("sidebar.deleteBtnList", (ident, uuid) => this.deleteActionList(uuid));
    }

    addActionList(action: IActonList) {
        let actList = this.state.actonList;
        if (actList.every(act => act.uuid !== action.uuid)) {
            actList.push(action);
            this.setState({actonList: actList});
        }
    }

    deleteActionList(uuid) {
        let actList = this.state.actonList.filter(act => act.uuid !== uuid);
        this.setState({actonList: actList});
    }

    toggleBtn() {
        this.setState({hidden: !this.state.hidden});
        setTimeout(() => {
            PubSub.publish('sidebar.toggle');
        }, 450);

    };

    render() {
        const hidden = this.state.hidden;
        const actonList = this.state.actonList;
        return (
            <div className={"left-sidebar " + (hidden && "sidebar-hidden" || "")}>
                <div className="sidebar-btn-list">
                    {actonList.map(action => {
                        return (
                            <span key={action.uuid}>
                                {action.renderList}
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
}