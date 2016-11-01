import {IThemJSON} from "../app/themLoader";
import {StringMap, IDataFromServer, IDataToServer, DataTransfer} from "./DataTransfer";
import {Generator} from "./RandomGenerator";
import {data1} from "./baseData/comp1";


let storage: StringMap<IDataFromServer> = {};
let storageTypes: StringMap<IDataFromServer> = {};

let nameAttr: IDataFromServer = {
    jsIdent: "TextControl",
    typeIdent: "AttrName",
    uuid: Generator.UUID(),
    readOnly: false,
    type: {
        value: {
            baseType: "string",
            value: ""
        },
        name: {
            baseType: "string",
            value: "Имя бъекта"
        }
    }
};

let col6: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 12
        },
        name: {
            baseType: "VisualComponent",
            value: nameAttr,
            group: "attrs"
        }
    }
};

let dataRow: IDataFromServer = {
    typeIdent: "Row",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "RowControl",
    type: {
        col1: {
            baseType: "VisualComponent",
            value: col6,
            group: "cols"
        }
    },
};

let data: IDataFromServer = {
    typeIdent: "baseType",
    uuid: "baseType",
    readOnly: false,
    jsIdent: "ObjecWrap",
    type: {
        Row1: {
            baseType: "VisualComponent",
            value: dataRow,
            group: "rows"
        }
    },
};

storage["baseType"] = data;
storage["1"] = data1;
storageTypes["baseType"] = data;

let getFromStorage = (uuid: string) => new Promise<IDataFromServer>((resolve, cach) => {
    if (storage[uuid]) {
        resolve(storage[uuid]);
    } else {
        cach(null);
    }
});

let loadTypsList = () => new Promise<Array<IDataFromServer>>((resolve, cach) => {
    resolve($.makeArray(storageTypes));
});

let saveStorage = (strObj: string) => new Promise<boolean>((resolve, cach) => {
    let data: IDataToServer = JSON.parse(strObj);
    console.log(data);
    let rekObh = (data: IDataToServer) => {
        if (data.uuid) { //&& data.updated) {
            let tempData: IDataFromServer = {
                uuid: data.uuid,
                jsIdent: data.jsIdent,
                readOnly: false,
                type: data.type,
                typeIdent: data.typeIdent
            };
            storage[data.uuid] = tempData;
        }
        if (data.type) {
            $.map(data.type, (val) => {
                rekObh(val.value);
            });
        }
    };
    rekObh(data);
    resolve(true);
});

export class SysApi {
    public static getJSON(url: string, data?: Object|string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            $.getJSON(url, data, resolve);
        });
    }

    public static getBootsWatch(version: number): Promise<IThemJSON> {
        return this.getJSON(`https://bootswatch.com/api/${version}.json`);
    }

    public static loadObject(uuid: string): Promise<IDataFromServer> {
        return getFromStorage(uuid);
    }

    public static saveObject(DT: DataTransfer): Promise<boolean> {
        let strDT = DT.toString();
        return saveStorage(strDT);
    }

    public static loadTypesList(): Promise<Array<IDataFromServer>> {
        return loadTypsList();
    }


}