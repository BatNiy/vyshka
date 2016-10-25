/// <reference path="../_all.d.ts" />

import {createConnection, Repository} from "typeorm";
let options = require("./Configuration.json");

export class DataService {

    public static GetRepository<T>(className: string): Promise<Repository<T>> {
        let repository: Repository<T>;

        return createConnection(options).then(connection => {
            repository = connection.getRepository<T>(className);
    }).then();
    }
}