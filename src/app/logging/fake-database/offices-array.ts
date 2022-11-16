import { Offices } from "../logging-interfaces/offices-interface";


// reminder
/*
  export interface Offices {
    officeID: number;
    officeName: string;
    frontImage?: HTMLElement;
    city: string;
    street: string;
    postalCode: string;
    description: string;
  }
*/

export const searchForOfficeName = function(name: string) {
  let counter = 0;
  for(let indice of offices) {
    counter++;
    if(indice.officeName = name) {
      return offices[counter];
    }
  }
  return offices[0];
}

export const offices: Offices[] = [
  {
    officeName: "OfficeNotFound",
    frontImage: undefined,
    city: "None",
    street: "None",
    postalCode: "00-00",
    description: "Placeholder if searchForOfficeName hasn't found any office name."
  },

  {
    officeName: "CorpoWieprz 101",
    frontImage: undefined,
    city: "Świnkowo",
    street: "Chruma 21",
    postalCode: "01-12",
    description: undefined,
  },

  {
    officeName: "Kosmoświnka",
    frontImage: undefined,
    city: "Raciczki Górne",
    street: "Małej Świnki 107",
    postalCode: "03-49",
    description: undefined,
  }
]
