/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import "./ActivityPanel.less";

export interface IActivityPanelProps {

}

export interface IActivityPanelState {
    hidden: boolean;
}

export class ActivityPanel extends Component<IActivityPanelProps, IActivityPanelState> {

    constructor(props: IActivityPanelProps) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    toggleBtn() {
        this.setState({hidden: !this.state.hidden});
    };

    get icon(): React.ReactElement<any> {
        if (this.state.hidden) {
            return <span className="glyphicon glyphicon-menu-up"/>;
        } else {
            return <span className="glyphicon glyphicon-menu-down"/>;

        }
    }

    render() {
        const hidden = this.state.hidden;
        return (
            <div className={"activity-panel-wrap " + (hidden ? "hidden-panel" : "")}>
                <div className="activity-panel-toggle-btn" onClick={() => this.toggleBtn()}>
                    {this.icon}
                </div>
                <div className="activity-panel-body">

                </div>
            </div>
        );
    }
}