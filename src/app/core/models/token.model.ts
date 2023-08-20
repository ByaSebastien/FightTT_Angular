import { RoleModel } from "./role.model";

export interface TokenModel {
    id: number;
    username: string;
    roles: RoleModel[];
    token: string
}