import { RoleI } from "./roleI";

export interface UserJWTI {
    id_user?: number;
    email: string;
    name: string;
    surname: string;
    password?: string;
    institution?: string;
    roles?: RoleI[];
}
