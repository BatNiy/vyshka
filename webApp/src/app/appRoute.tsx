/// <reference path="../components/index.d.ts" />
import "./app.less";
import "../less/index.less";
import React = require("react");
import {Component} from "react";
import {Router, Route, hashHistory} from "react-router";
import {ObjectWrap} from "../components/ObjectWrap/ObjecWrap";
import {Map} from "../components/Map/Map";

export class AppRoute extends Component<{}, {}> {
    render() {
        return (
            <div className="content-wrap-app">
                <Router history={hashHistory}>
                    <Route path="/" component={Map}/>
                    <Route path="/object/:uuid" component={ObjectWrap}/>
                    <Route path="/map" component={Map}/>
                </Router>
            </div>
        );
    }
}