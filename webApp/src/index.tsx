import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from "./components/Hello";

var entryDiv = document.createElement("entryDiv");

document.body.appendChild(entryDiv);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    entryDiv
);