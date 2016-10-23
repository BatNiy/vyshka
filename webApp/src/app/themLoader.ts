import {SysApi} from "../baseDataLogic/SysApi";
export interface IThemJSON {
    themes: Array<IThemItem>;
}

export interface IThemItem {
    css: string;
    name: string;
    cssMin: string;
}
export class ThemeLoader {
    private static themeBox: HTMLBaseElement;
    private static $initDiv: JQuery;
    private static themesJSON: Promise<IThemJSON>;
    private static currentThem: string;

    public static init(initDiv: HTMLDivElement) {
        this.themeBox = document.createElement("link");
        this.themeBox.setAttribute("rel", "stylesheet");
        this.themeBox.setAttribute("href", "https://bootswatch.com/yeti/bootstrap.min.css");
        document.head.appendChild(this.themeBox);
        this.currentThem = "Yety";
        this.$initDiv = $(`#${initDiv.id}`);
        this.$initDiv.addClass("Yety");
        this.themesJSON = SysApi.getBootsWatch(3).then();
    }

    public static themes(): Promise<IThemJSON> {
        return this.themesJSON;
    }

    public static setTheme(theme: IThemItem) {
        // console.log(theme.name);
        this.$initDiv.removeClass(this.currentThem);
        this.$initDiv.addClass(theme.name);
        this.currentThem = theme.name;
        this.themeBox.setAttribute("href", theme.cssMin);
    }

}