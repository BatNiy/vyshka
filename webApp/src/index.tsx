import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app/app";

(global as any).jQuery = require('jquery');
(global as any).$ = require('jquery');
import "bootstrap";
import {ThemeLoader} from "./app/themLoader";

$(() => {
    var entryDiv = document.createElement("div");
    entryDiv.id = "entry-div";
    document.body.appendChild(entryDiv);

    ThemeLoader.init(entryDiv);

    ReactDOM.render(
        <App/>,
        entryDiv
    );
})
// $(document).ready(function () {
//     //your code here
//
// });
