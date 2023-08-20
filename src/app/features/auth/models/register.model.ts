import { GenderEnum } from "../enums/gender.enum";


export interface RegisterModel {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthdate?: Date;
    gender: GenderEnum
}