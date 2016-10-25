/// <reference path="../../_all.d.ts" />

import {DataService} from "../DataService";
import {Repository} from "typeorm";
import {BaseObject} from "../Entities/ObjectBase";

export class ObjectBS {

    private repository: Promise<Repository<BaseObject>>;

    public constructor() {
        this.repository = DataService.GetRepository<BaseObject>(BaseObject.getName()).then();
    }

    public CreateOne(name: string, descr : string): void {
        let object = new BaseObject();
        object.name = name;
        object.description = descr;

        this.repository.then(repository => {
            repository.create(object);
        });
    }
}