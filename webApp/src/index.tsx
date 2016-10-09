import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app/app";

var entryDiv = document.createElement("div");

document.body.appendChild(entryDiv);

ReactDOM.render(
    <App/>,
    entryDiv
);