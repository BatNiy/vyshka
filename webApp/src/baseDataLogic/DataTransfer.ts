export interface StringMap<T> {
    [ident: string]: T;
}

export interface IDataToServer extends ICommonData {
    //Таблица название (Название типа)
    typeIdent: string;
    updated: boolean;
    delete: boolean;
}

export type BaseTypes = "string" | "number" | "float" | IDataFromServer | null;

export type IValueByType<BaseType extends BaseTypes> = any;

export interface ICommonData {
    uuid: string;
    type: StringMap<{
        baseType: BaseTypes;
        value: IValueByType<BaseTypes>;
    }>;
}

export interface IDataFromServer extends ICommonData {
    readOnly: boolean;
    jsIdent: string;
    // childrenIdents: Array<string>;
    // mapChild: StringMap<Array<IDataFromServer>>;
}

export interface IDataSever extends IDataFromServer, IDataToServer {

}

export class DataTransfer implements IDataSever {
    typeIdent: string;
    type: StringMap<{baseType: BaseTypes; value: IValueByType<BaseTypes>}>;
    readOnly: boolean;
    value: Array<any>;
    typeBase: string;
    typeUser: string;
    jsIdent: string;
    childrenIdents: Array<string>;
    mapChild: StringMap<Array<IDataFromServer>>;
    updated: boolean;
    delete: boolean;
    uuid: string;

    constructor(date: IDataFromServer) {
        $.map(date, (value, ident) => {
            this[ident] = value;
        });
    }
}