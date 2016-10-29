declare module "pubsub-js" {
    // export interface PubSub {
    export function subscribe(ident: string, cb: () => any);
    export function publish(ident: string);

    // }
    // export default PubSub;
}