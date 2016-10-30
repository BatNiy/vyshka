declare module "pubsub-js" {
    export function subscribe<T>(ident: string, cb: (ident: string, data: T) => any);

    export function publish<T>(ident: string, data: T);

    export function subscribe(ident: string, cb: (ident?: string, data?: any) => any);

    export function publish(ident: string, data?: any);
}