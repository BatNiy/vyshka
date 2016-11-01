/// <reference path="../index.d.ts" />
import React = require('react');
import {Component} from "react";
import {IDataFromServer, DataTransfer} from "../../baseDataLogic/DataTransfer";
import {Grid, Row, Jumbotron, Button} from "react-bootstrap";
import {FieldGroup} from "../FieldGroup/FieldGroup";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './ObjectEditor.less';
import {
    BaseVisualComponent, IBaseVisualComponentProps,
    IBaseVisualComponentState
} from "../BaseVisualComponent/BaseVisualComponent";
export interface IObjectEditorState extends IBaseVisualComponentState {
}

export interface IObjectEditorProps extends IBaseVisualComponentProps {
}

export class ObjectEditor extends BaseVisualComponent<IObjectEditorProps, IObjectEditorState> {
    protected renderComponent(): React.ReactElement<any> {
        return <div>asdasd</div>;
    }

    protected loadingComponentWait(): React.ReactElement<any> {
        return (
            <Grid fluid={true} className="gridIn">
                <Row>
                    <Jumbotron>
                        <h1>Редактор типов</h1>
                        <p>Для редактировани типа перетащите его из дерева справа, или создайте новый</p>
                        <p><Button bsStyle="primary" onClick={() => this.makeNewObject()}>Создать новый</Button></p>
                    </Jumbotron>
                </Row>
            </Grid>
        );
    };

    makeNewObject() {
        // let newDataTransfer = new DataTransfer();
    }

    // render() {
    //     return (
    //         <div id="objectFormWrap">
    //                 <Row>
    //                     <Col xs={12}>
    //                         <FieldGroup
    //                             id="formControlsText"
    //                             type="text"
    //                             label="Text"
    //                             placeholder="Enter text"
    //                         />
    //                     </Col>
    //                 </Row>
    //                 <Row>
    //                     <Col xs={12}>
    //                         <BootstrapTable data={[]} striped={true} hover={true}>
    //                             <TableHeaderColumn isKey={true} dataField="id">Наименование</TableHeaderColumn>
    //                             <TableHeaderColumn dataField="name">Только для чтения</TableHeaderColumn>
    //                             <TableHeaderColumn dataField="price">Отслеживаемый</TableHeaderColumn>
    //                         </BootstrapTable>
    //                     </Col>
    //                 </Row>
    //         </div>
    //     );
    // }
}