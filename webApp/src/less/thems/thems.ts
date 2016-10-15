export type Them = "Yeti" | "Bootstrap" | "Superhero"

export class ThemsList {
    public static get currentThem(): string {
        return ThemsList._currentThem;
    }

    private static _currentThem: Them = "Bootstrap";

    public static setThem(them: Them) {
        ThemsList._currentThem = them;
    }
}