/// <reference path="../../_all.d.ts" />


export abstract class BaseEnt {
    public static getName(): string {
        let comp: any = this.constructor;
        return comp.name;
    }
}