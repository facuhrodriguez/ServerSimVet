import { UserI } from "./userI";
import { UserJWTI } from "./userJWTI";

export interface JWTResponseI {
    user: UserJWTI,
    expiresIn: number,
    access_token?: string
}