declare module "react-notifications" {
    export class NotificationContainer {

    }
    export interface NotificationManager {
        info(msg: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
        success(msg: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
        warning(msg: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
        error(msg: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
    }
}