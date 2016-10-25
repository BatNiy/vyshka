let shortid: any = require('shortid');
let uuid: any = require('uuid');

export class Generator {
    public static UUID(): string {
        return uuid.v4();
    }

    public static ShortId(): string {
        return shortid.generate();
    }
}