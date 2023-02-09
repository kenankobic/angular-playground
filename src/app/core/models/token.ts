export interface Token {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    issued: number;
    username: string;
    userId: string;
    roles: string[];
    authorities: string[];
    language: string;
    email: string;
}