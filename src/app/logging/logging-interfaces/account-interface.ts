// interfaces
import { Departments } from "./departments-interface";
import { Offices } from "./offices-interface";
import { Positions } from "./positions-interface";

export interface Account {
  password: string;
  image?: HTMLImageElement;
  firstName: string;
  surname: string;
  username: string;
  email: string;
  tel: number;
  position: Positions;
  department?: Departments;
  office: Offices;
  reportsTo?: Account;
  external: Boolean;
  isManager: Boolean;
  whenCreated: Date;
}
