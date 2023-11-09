import { EUserRole } from "../enums/EUserRole";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  contract: string; // TODO: Contract Interface
  role: EUserRole;
}
