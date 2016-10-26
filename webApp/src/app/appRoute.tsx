/// <reference path="../components/index.d.ts" />
import "./app.less";
import "../less/index.less";
import React = require("react");
import {Component} from "react";
import {Router, Route, hashHistory} from "react-router";
import {ObjectWrap} from "../components/ObjectWrap/ObjecWrap";
import {Map} from "../components/Map/Map";
import {LoginModal} from "../components/LoginModal/LoginModal";
import {ObjectEditor} from "../components/ObjectEditor/ObjectEditor";

export class AppRoute extends Component<{}, {}> {
    render() {
        return (
                <Router history={hashHistory}>
                    <Route path="/" component={Map}/>
                    <Route path="/object/:uuid" component={ObjectWrap}/>
                    <Route path="/map" component={Map}/>
                    <Route path="/login" component={LoginModal}/>
                    <Route path="/objectEditor" component={ObjectEditor}/>
                </Router>
        );
    }
}