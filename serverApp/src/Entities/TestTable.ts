/// <reference path="../_all.d.ts" />
import {Table} from "typeorm";
import {PrimaryColumn, Column} from "typeorm";

@Table("photo")
export class Photo {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    isPublished: boolean;

}