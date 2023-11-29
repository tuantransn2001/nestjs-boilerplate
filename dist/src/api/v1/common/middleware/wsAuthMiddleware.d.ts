import { Socket } from 'socket.io';
export type WsAuthMiddleware = {
    (client: Socket, next: (err?: Error) => void): any;
};
export declare const WsAuthMiddleware: () => WsAuthMiddleware;
