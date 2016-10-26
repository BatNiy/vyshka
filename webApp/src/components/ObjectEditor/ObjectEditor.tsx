/// <reference path="../index.d.ts" />
import React = require('react');
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";
import {Grid, Col, Row, FormGroup} from "react-bootstrap";
import {FieldGroup} from "../FieldGroup/FieldGroup";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './ObjectEditor.less';
export interface IObjectEditorState {
}

export interface IObjectEditorProps {
}

export class ObjectEditor extends Component<IObjectEditorState, IObjectEditorProps> {

    render() {
        return (
            <div id="objectFormWrap">
                    <Row>
                        <Col xs={12}>
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Text"
                                placeholder="Enter text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BootstrapTable data={[]} striped={true} hover={true}>
                                <TableHeaderColumn isKey={true} dataField="id">Наименование</TableHeaderColumn>
                                <TableHeaderColumn dataField="name">Только для чтения</TableHeaderColumn>
                                <TableHeaderColumn dataField="price">Отслеживаемый</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>
            </div>
        );
    }
}