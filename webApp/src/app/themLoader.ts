import {SysApi} from "../baseDataLogic/SysApi";
export interface IThemJSON {
    themes: Array<IThemItem>;
}

export interface IThemItem {
    css: string;
    name: string;
    cssMin: string;
}
export class ThemLoader {
    private static themBox: HTMLBaseElement;
    private static $ininDiv: JQuery;
    private static themesJSON: Promise<IThemJSON>;
    private static currentThem: string;

    public static init(ininDiv: HTMLDivElement) {
        this.themBox = document.createElement("link");
        this.themBox.setAttribute("rel", "stylesheet");
        this.themBox.setAttribute("href", "https://bootswatch.com/yeti/bootstrap.min.css");
        document.head.appendChild(this.themBox);
        this.currentThem = "Yety";
        this.$ininDiv = $(ininDiv.id);
        this.$ininDiv.addClass("Yety");
        this.themesJSON = SysApi.getBootsWatch(3).then();
    }

    public static thems(): Promise<IThemJSON> {
        return this.themesJSON;
    }

    public static setThem(them: IThemItem) {
        this.$ininDiv.removeClass(this.currentThem);
        this.$ininDiv.addClass(them.name);
        this.currentThem = them.name;
        this.themBox.setAttribute("href", them.cssMin);
    }

}