import { environment } from "src/environments/environment";

export enum Endpoint {
    USERS = '/users',
    LOGIN = '/login',
    TOKEN = '/token'
}

export namespace Endpoint {
    export function withContextPath(endpoint: string): string {
        return environment.apiContext + endpoint;
    }
}
