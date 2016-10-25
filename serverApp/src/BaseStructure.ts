import {
    DataTransfer, IDataFromServer, IDataToServer, IDataSever,
    StringMap, BaseTypes, IValueByType
} from "../../webApp/src/baseDataLogic/DataTransfer";

export class BaseStructure implements IDataSever{
    readOnly: boolean;
    jsIdent: string;
    uuid: string;
    type: StringMap<{baseType: BaseTypes; value: IValueByType<BaseTypes>}>;
    typeIdent: string;
    updated: boolean;
    delete: boolean;

    public constructor(data: IDataToServer) {
        $.map(data, (value, ident) => {
            this[ident] = value;
        });
    }

    static Serialize(): string {
        return JSON.stringify(this);
    }
}