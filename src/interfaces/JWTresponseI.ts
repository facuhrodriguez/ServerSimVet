import { UserI } from "./userI";

export interface JWTResponseI {
    user: UserI,
    expiresIn: number,
    access_token?: string
}