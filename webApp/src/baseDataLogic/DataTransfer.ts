import {ComponentClass} from "react";
import {Component} from "react";
import {IBaseVisualComponentProps} from "../components/BaseVisualComponent/BaseVisualComponent";
export interface StringMap<T> {
    [ident: string]: T;
}

export interface IDataToServer extends ICommonData {
    //Таблица название (Название типа)
    updated: boolean;
    delete: boolean;
}

export type BaseTypesIdents = "string" | "int" | "float" | "VisualComponent" ;

export type BaseTypes = string | number | IDataFromServer;

export interface ICommonData {
    uuid?: string;
    type: StringMap<ITypeInfo>;
    typeIdent: string;
}

export interface IDataFromServer extends ICommonData {
    readOnly?: boolean;
}

export interface IDataSever extends IDataFromServer, IDataToServer {

}

export interface ITypeInfo {
    jsIdent?: string;
    baseType: BaseTypesIdents;
    value: Array<BaseTypes>;
}

export class DataTransfer implements IDataSever {
    type: StringMap<ITypeInfo>;
    uuid: string;
    typeIdent: string;
    jsIdent: string;
    updated: boolean;
    delete: boolean;

    static controlReq = (require as any).context("../components", true, / *\.ts/);

    constructor(date: IDataFromServer) {
        $.map(date, (value, ident) => {
            this[ident] = value;
        });
    }

    static pathToComponents(ident: string): string {
        return `./${ident}/${ident}.tsx`;
    }

    public getVisualComponents(sort?: boolean, divide?: boolean): Array<ITypeInfo> {
        let out: Array<ITypeInfo> = [];
        $.map(this.type, (type) => {
            if (type.baseType === "VisualComponent") {
                if (divide) {
                    type.value.forEach((val) => {
                        let tempType: ITypeInfo = {
                            value: [val],
                            baseType: type.baseType,
                            jsIdent: type.jsIdent
                        };
                        out.push(tempType);
                    });
                } else {
                    out.push(type);
                }
            }
        });
        if (sort) {
            out.sort((elem1, elem2) => DataTransfer.getOrd((elem1.value[0] as IDataFromServer)) - DataTransfer.getOrd((elem2.value[0] as IDataFromServer)));
        }
        return out;
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

    public value(ident: string, asNotArray?: boolean): Array<BaseTypes> | BaseTypes {
        if (asNotArray) {
            return this.type[ident].value[0];
        }

        return this.type[ident].value;
    }

    get ord() {
        return this.value("ord", true);
    }

    public static getOrd(elem: IDataFromServer): number {
        return elem.type["ord"].value[0] as number || 0;
    }
}

