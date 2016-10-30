/// <reference path="../index.d.ts" />
import React = require("react");
import {Component} from "react";
import "./Header.less";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {AutoAffix} from "react-overlays";
import {ThemeLoader, IThemJSON} from "../../app/themLoader";
export interface IHeaderProps {

}

export interface IHeaderState {
    themes?: IThemJSON;
}

export class Header extends Component<IHeaderProps, IHeaderState> {

    constructor(props: IHeaderProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        ThemeLoader.themes().then((themes) => this.setState({themes: themes}));
    };

    get userIcon() {
        return <span className="glyphicon glyphicon-user"/>;
    }

    render() {
        const themes = this.state.themes;
        return (
            <header>
                <Navbar fixedTop={true} fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">SomTrack</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#/map">Map</NavItem>
                            <NavItem eventKey={2} href="#/ObjectEditor">object_editor</NavItem>
                        </Nav>
                        <Nav pullRight>
                            {themes ?
                                <NavDropdown eventKey={"them"} title="Темы">
                                    {themes.themes.map((theme, index) => {
                                            return <NavItem eventKey={"theme" + index.toString()} key={index}
                                                            onSelect={() => ThemeLoader.setTheme(theme)}>
                                                {theme.name}
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

//<NavDropdown eventKey={3} title="Dropdown">
//    <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//    <MenuItem eventKey={3.3}>Something else here</MenuItem>
//    <MenuItem divider/>
//    <MenuItem eventKey={3.3}>Separated link</MenuItem>
//</NavDropdown>