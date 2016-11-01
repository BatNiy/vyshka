/// <reference path="../components/index.d.ts" />
import React = require("react");
import {Component} from "react";
// import "react-notifications/lib/fonts/";
import 'react-notifications/lib/notifications.css';
let reactNotifications = require('react-notifications');
let NotificationContainer = reactNotifications.NotificationContainer;
let NotificationManager = reactNotifications.NotificationManager;

export class Notificator extends Component<{}, {}> {

    static info(msg: string) {
        NotificationManager.info(msg);
    }

    static success(msg: string) {
        NotificationManager.success(msg);
    }

    static error(msg: string) {
        NotificationManager.error(msg);
    }

    render() {
        return <NotificationContainer/>;
    }
}