/// <reference path="../../index.d.ts" />
import React = require("react");
import {Component} from "react";
import "./LeftSideBar.less";

export interface ILeftSidebarProps {

}

export interface ILeftSidebarState {
    hidden: boolean;
}

export class LeftSidebar extends Component<ILeftSidebarProps, ILeftSidebarState> {

    constructor(props: ILeftSidebarProps) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    toggleBtn() {
        this.setState({hidden: !this.state.hidden});
    };

    render() {
        const hidden = this.state.hidden;
        return (
            <div className={"left-sidebar " + (hidden && "sidebar-hidden" || "")}>
                <div className="sidebar-toggle-btn" onClick={() => this.toggleBtn()}>
                    <span className="glyphicon glyphicon-menu-hamburger"/>
                </div>
            </div>
        );
    }
}