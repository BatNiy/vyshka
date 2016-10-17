import {IThemJSON} from "../app/themLoader";
export class SysApi {
    public static getJSON(url: string, data?: Object|string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            $.getJSON(url, data, resolve);
        });
    }

    public static getBootsWatch(version: number): Promise<IThemJSON> {
        return this.getJSON(`https://bootswatch.com/api/${version}.json`);
    }
}