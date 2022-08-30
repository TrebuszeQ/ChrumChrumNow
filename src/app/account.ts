import { employeeType } from "./employee-type-type";
import { office } from "./office-type";
import { company } from "./company-type";
import { timezone } from "./timezone-type";

export interface Account {
  mail: string;
  username: string;
  firstName: string;
  secondName: string;
  employeeNumber: number;
  title: string;
  department: string;
  lineManager: string;
  employeeType: employeeType;
  officeLocation: office;
  company: company;
  timeZone: timezone;
  createdDate: Date;
}
