/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import "./Header.less";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {ThemLoader, IThemJSON} from "../../app/themLoader";
export interface IHeaderProps {

}

export interface IHeaderState {
    thems?: IThemJSON;
}

export class Header extends Component<IHeaderProps, IHeaderState> {

    constructor(props: IHeaderProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        ThemLoader.thems().then((thems) => this.setState({thems: thems}));
    };

    get userIcon() {
        return <span className="glyphicon glyphicon-user"/>;
    }

    render() {
        const thems = this.state.thems;
        return (
            <header>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">SomTrack</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            {thems ?
                                <NavDropdown eventKey={"them"} title="Темы">
                                    {thems.themes.map((them, index) => {
                                            return <NavItem eventKey={"them" + index.toString()}
                                                            onSelect={() => ThemLoader.setThem(them)}>
                                                {them.name}
                                            </NavItem>;
                                        }
                                    )}
                                </NavDropdown> : ""
                            }
                            <NavDropdown eventKey={3} title={this.userIcon}>
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Выход</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}