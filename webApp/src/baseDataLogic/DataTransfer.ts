import {ComponentClass} from "react";
import {Component} from "react";
import {IBaseVisualComponentProps} from "../components/BaseVisualComponent/BaseVisualComponent";
import {gruopsElements} from "./rules";
export interface StringMap<T> {
    [ident: string]: T;
}

export interface IDataToServer extends ICommonData {
    //Таблица название (Название типа)
    updated: boolean;
    delete: boolean;
}

export type BaseTypesIdents = "string" | "int" | "float" | "VisualComponent" ;

export type _BaseTypes = string | number ;
export type BaseTypes = _BaseTypes | IDataFromServer;
export type BaseTypesUnpaced = _BaseTypes | DataTransfer;
export interface ICommonData {
    uuid?: string;
    type: StringMap<ITypeInfo>;
    typeIdent: string;
    jsIdent: string;
    parentObjUUID?: string;
}

export interface IDataFromServer extends ICommonData {
    readOnly?: boolean;
}

export interface IDataSever extends IDataFromServer, IDataToServer {

}

export interface ITypeInfoUnpac extends ITypeInfo {
    value: BaseTypesUnpaced;
}
export interface ITypeInfo {
    baseType: BaseTypesIdents;
    value: BaseTypes;
    group?: gruopsElements;
}

export class DataTransfer implements IDataSever {
    thisDataTransfer: boolean = true;
    VisualComponentMapByGroup: StringMap<DataTransfer[]> = {};
    VisualComponentArray: DataTransfer[] = [];
    type: StringMap<ITypeInfoUnpac>;
    uuid: string;
    typeIdent: string;
    jsIdent: string;
    readOnly: boolean;
    updated: boolean = false;
    delete: boolean = false;

    static controlReq = (require as any).context("../components", true, / *\.ts/);

    toString(): string {
        return JSON.stringify(this, null, '\t');
    }

    toJSON() {
        let temp = {};
        $.map(this, (field, fieldName) => {
            if (typeof field !== "function") {
                if (fieldName !== "thisDataTransfer" && fieldName !== "VisualComponentMapByGroup" && fieldName !== "VisualComponentArray") {
                    temp[fieldName] = field;
                }
            }
        });
        return temp;
    }

    constructor(date: IDataFromServer) {
        $.map(date, (value, ident) => {
            this[ident] = value;
        });
        this.unpackStructure(date);
        this.sortGroups();
    }

    unpackStructure(data: IDataFromServer) {
        $.map(data.type, (field, fieldName) => {
            if (field.baseType === "VisualComponent") {
                field.value = new DataTransfer(field.value);
                if (field.group) {
                    if (!this.VisualComponentMapByGroup[field.group]) {
                        this.VisualComponentMapByGroup[field.group] = [];
                    }
                    this.VisualComponentMapByGroup[field.group].push(field.value);
                }
                this.VisualComponentArray.push(field.value);
            }
        });
    }

    sortGroups() {
        let tempStrMap: StringMap<Array<DataTransfer>> = {};
        $.map(this.VisualComponentMapByGroup, (elements: Array<DataTransfer>, indexOrKey: string) => {
            tempStrMap[indexOrKey] = elements.sort((a, b) => a.ord - b.ord);
        });
        this.VisualComponentMapByGroup = tempStrMap;
    }

    getGroup(ident: string): Array<DataTransfer> {
        return this.VisualComponentMapByGroup[ident] || [];
    }

    static pathToComponents(ident: string): string {
        return `./${ident}/${ident}.tsx`;
    }

    public getVisualComponents(sort?: boolean): Array<DataTransfer> {
        if (sort) {
            return this.VisualComponentArray.sort((elem1, elem2) => elem1.ord - elem2.ord);
        }
        return this.VisualComponentArray;
    }

    public static getCommponent(ident: string): ComponentClass<IBaseVisualComponentProps> {
        let out = DataTransfer.controlReq("./RequreFail/RequreFail.tsx").Control;
        try {
            let jsIdent = ident;
            out = DataTransfer.controlReq(this.pathToComponents(jsIdent)).Control;
        } catch (e) {
            console.log("Не найден " + ident, e);
        }
        return out;
    }

    public value(ident: string): BaseTypesUnpaced {
        return this.type[ident] && this.type[ident].value;
    }

    public set(idnet: string, value: BaseTypesUnpaced) {
        this.type[idnet].value = value;
        this.updated = true;
        return this;
    };

    get ord(): number {
        return parseInt(this.value("ord") as string) || 0;
    }

    public static getOrd(elem: IDataFromServer): number {
        return elem.type["ord"] && elem.type["ord"].value as number || 0;
    }
}

