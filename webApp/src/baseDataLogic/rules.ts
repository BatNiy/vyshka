import {StringMap} from "./DataTransfer";

export type gruopsElements = "rows" | "cols" | "attrs" | string ;

export class Rules {
    public static LoadRules() {
        //TODO топо потом будут храниться на сервере
    }

    public static inpList(jsIdent: string) {
        return this._rules[jsIdent];
    }

    public static canInp(jsIdentRoot: string, jsIdentInp: string): boolean {
        return this._rules[jsIdentRoot].some(ident => jsIdentInp === ident);
    }

    static _rules: StringMap<Array<string>> = {
        ObjecWrap: ["RowControl"]
    };
}