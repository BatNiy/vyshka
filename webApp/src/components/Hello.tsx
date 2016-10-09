import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
    params: {
        compiler: string;
        framework: string;
    };
}

export class Hello extends React.Component<HelloProps, {}> {

    getVal(ident) {
        return this.props.params && this.props.params[ident] || this.props[ident] || "";
    }

    get compiler(): string {
        return this.getVal("compiler");
    }

    get framework(): string {
        return this.getVal("framework");
    }

    render() {
        return <h1>Hello from {this.compiler} and {this.framework}</h1>;
    }
}