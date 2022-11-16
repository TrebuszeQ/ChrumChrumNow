import { Account } from "./account-interface";
import { Groups } from "./groups-interface";
import { Positions } from "./positions-interface";

export interface Departments {
  departmentID: number;
  departmentName: string;
  mainGroup: Groups;
  reportsTo: Positions;
  whenCreated: Date;
}
