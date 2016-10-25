/// <reference path="../_all.d.ts" />

import * as express from "express";

export interface IService {
    readonly url: string;
    handler (req: express.Request, res: express.Response) : void;
}

export interface IRoutable {
    getServices() : Array<IService>;
}