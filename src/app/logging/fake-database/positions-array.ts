import { Positions } from "../logging-interfaces/positions-interface";

// reminder
/*
export interface Positions {
  positionID: number;
  positionName: string;
  description?: string;
  salaryMin: number;
  salaryMax: number;
};
*/

// METHOD
export const searchForPositionName = function(name: string): Positions {
  let counter = 0;
  for(let indice of positions) {
    counter++;
    if(indice.positionName === name) {
      return positions[counter];
    }
  }
  return positions[0];
}

let i = 0;
export const positions: Positions[] = [
  {
    positionID: i,
    positionName: "Wrong Position Name",
    description: "Placeholder for wrong results of searchForPositionName method.",
  },

  {
    positionID: i++,
    positionName: "Junior Frontend Developer",
  },

  {
    positionID: i++,
    positionName: "Frontend Developer",
  },

  {
    positionID: i++,
    positionName: "Senior Frontend Developer",
  },

  {
    positionID: i++,
    positionName: "Junior Backend developer",
  },

  {
    positionID: i++,
    positionName: "Backend Developer",
  },

  {
    positionID: i++,
    positionName: "Senior Backend Developer",
  },

  {
    positionID: i++,
    positionName: "Guest",
  },

  {
    positionID: i++,
    positionName: "Privileged Guest",
  },

  {
    positionID: i++,
    positionName: "CEO",
  },

  {
    positionID: i++,
    positionName: "Senior IT Director",
    reportsTo: searchForPositionName("CEO"),
  },

  {
    positionID: i++,
    positionName: "IT Director",
    reportsTo: searchForPositionName("Senior IT Director"),
  },

  {
    positionID: i++,
    positionName: "IT Vice Director",
    reportsTo: searchForPositionName("IT Director"),
  }
];
