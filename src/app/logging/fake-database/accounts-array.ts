import { Account } from "../logging-interfaces/account-interface";
import { positions, searchForPositionName } from "./positions-array";
import { Departments} from "../logging-interfaces/departments-interface";
import { usernames } from "./usernames-array";
import { offices } from "./offices-array";

const usernameCreator = function(first: string, sur: string) {
  let username = '';
  first.length > 3 ? first = first.substring(0,3) : first = first;
  sur.length > 3 ? sur = sur.substring(0,3) : sur = sur;

  username = first.concat('', sur);

  let counter = 0;
  for(let object of accounts) {
    (object.username.includes(username) ? counter++ : counter = counter);
  };

  if(counter == 0) {
    do {
      if(username.length == 7) {
        username += '1'
        return username;
      }
      username += '0';
    } while(username.length < 8);
  }
  else if((counter >= 10) && (counter < 99)) {
    do {
      if(username.length == 6) {
        username += counter++;
        return username;
      }
      username += '0';
    } while(username.length < 8)
  }
  else if(counter >= 100){
    throw new Error("Not handled size of counter in the username.");
  }
  return username;
}

// reminder
/* import { Departments } from "./departments-interface";
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
  whenCreated: Date; new Date(year, monthIndex, day, hours, minutes)
}

*/

let i = 0;

export const accounts: Account[] = [
  {
    password: "Guest123!",
    image: undefined,
    firstName: "Employee",
    surname: "Guest",
    username: usernameCreator("Employee", "Guest"),
    email: "placeholder",
    tel: 881506803,
    position: searchForPositionName("Guest"),
    department: undefined,
    office: offices[0],
    reportsTo: undefined,
    external: false,
    isManager: false,
    whenCreated: new Date("2022, 10, 23, 22, 35"),
  },

]


