/// <reference path="../../_all.d.ts" />

import {PrimaryColumn, Column, Table} from "typeorm";
import {BaseEnt} from "./BaseEnt";

@Table("photo")
export class BaseObject extends BaseEnt {

    @PrimaryColumn("int", { generated: true })
    public id: number;

    @Column()
    public name: string;

    @Column()
    public description: string;
}