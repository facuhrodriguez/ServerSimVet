import { RoleI } from "./roleI";

export interface UserI {
  id_user?: number;
  email: string;
  name: string;
  surname: string;
  password?: string;
  institution?: string;
  roles?: RoleI[];
}
