import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app/app";

(global as any).jQuery = require('jquery');
(global as any).$ = require('jquery');
import "bootstrap";


$(document).ready(function () {
    //your code here
    var entryDiv = document.createElement("div");

    document.body.appendChild(entryDiv);

    ReactDOM.render(
        <App/>,
        entryDiv
    );
});
