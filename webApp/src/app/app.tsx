/// <reference path="../index.d.ts" />
import "./app.less";
import React = require("react");
import {Component} from "react";
import { Router, Route, hashHistory, IndexRoute} from "react-router";
import {Hello} from "../components/Hello";
import {TestBootstrap} from "../components/testBootstrap/testBootstrap";
export class App extends Component<{}, {}> {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={TestBootstrap}>
                    <IndexRoute component={Hello} />
                    <Route path='admin(/:compiler(/:framework))' component={Hello} />
                    <Route path='boot/' component={TestBootstrap} />
                </Route>
            </Router>
        );
    }
}
