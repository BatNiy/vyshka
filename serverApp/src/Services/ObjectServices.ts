/// <reference path="../_all.d.ts" />

import * as express from "express";
import {ObjectBS} from "../DataBase/BusinessServers/ObjectBS";
import {IRoutable, IService} from "./BaseService";
import round = require("lodash/round");


export class ObjectService implements IRoutable {

    public createObject = function (req: express.Request, res: express.Response) {
        let bs = new ObjectBS();
        bs.CreateOne("ads", "asd");
    };

    public getServices(): Array<IService> {
        return [<IService>{url: "/helloSukaKurva", handler: this.createObject}];
    }
}


