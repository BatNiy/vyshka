/// <reference path="../components/index.d.ts" />
import "./app.less";
import "../less/index.less";
import React = require("react");
import {Component} from "react";
// import {Router, Route, hashHistory, IndexRoute} from "react-router";
// import {Hello} from "../components/Hello";
// import {TestBootstrap} from "../components/testBootstrap/testBootstrap";
import {Header} from "../components/Header/Header";
import {LeftSidebar} from "../components/LeftSidebar/LeftSidebar";
import {ActivityPanel} from "../components/ActivityPanel/ActivityPanel";

export class App extends Component<{}, {}> {
    // render() {
    //     return (
    //         <Router history={hashHistory}>
    //             <Route path='/' component={TestBootstrap}>
    //                 <IndexRoute component={Hello}/>
    //                 <Route path='admin(/:compiler(/:framework))' component={Hello}/>
    //                 <Route path='boot/' component={TestBootstrap}/>
    //             </Route>
    //         </Router>
    //     );
    // }

    render() {
        return (
            <div className="page">
                <Header/>
                <div className="middle">
                    <LeftSidebar/>
                    <div className="content-wrap">

                    </div>
                    <ActivityPanel/>
                </div>
            </div>
        );
    }
}
