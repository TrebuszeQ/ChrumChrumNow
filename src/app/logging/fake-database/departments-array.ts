import { Departments } from "../logging-interfaces/departments-interface";
import { nameSearchingMethod } from "./groups-array";
import { searchForPositionName } from "./positions-array";

// reminder
/*
    export interface Departments {
    departmentID: number;
    departmentName: string;
    mainGroup: Groups;
    reportsTo: Account;
    whenCreated: Date;
  }
*/

let i = 0;

export const departments: Departments[] = [
  {
    departmentID: i,
    departmentName: "IT",
    mainGroup: nameSearchingMethod("globalIT"),
    reportsTo: searchForPositionName("Senior IT Director"),
    whenCreated: new Date("October 22, 2022 14:15:00"),
  },
];
