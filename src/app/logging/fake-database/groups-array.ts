import { Groups } from "../logging-interfaces/groups-interface";


// reminder
/*
  export interface Groups {
    groupId: number;
    groupName: string;
    type: "Linux" | "Windows";
    syncedWithCloud: Boolean;
    description?: string;
    whenCreated: Date;
  }
*/
export const nameSearchingMethod = function(groupName: string): Groups {
  const x = groups.find( (indice: Groups) => {
    return indice.groupName === groupName;
  });
  if(x === undefined) {
    return groups[0];
  }
  else {
    return x;
  }
};


export const groups: Groups[] = [
  {
    groupId: 0,
    groupName: "theWrongGroup",
    type: "Windows",
    syncedWithCloud: true,
    groups: undefined,
    description: "Group for wrong input outputs from nameSearchingMethod",
    whenCreated: new Date('October 19, 2022 22:50:00'),
  },

  {
    groupId: 1,
    groupName: "activeDirectoryAllEmployees",
    type: "Windows",
    syncedWithCloud: true,
    groups: undefined,
    description: undefined,
    whenCreated: new Date('October 19, 2022 22:43:00'),
  },

  {
    groupId: 2,
    groupName: "CCNowEmployees",
    type: "Windows",
    syncedWithCloud: true,
    groups: undefined,
    description: undefined,
    whenCreated: new Date('October 19, 2022 22:48:00'),
  },

  {
    groupId: 3,
    groupName: "CCNowDevs",
    type: "Windows",
    syncedWithCloud: true,
    groups: undefined,
    description: undefined,
    whenCreated: new Date('October 19, 2022 22:49:00'),
  },

  {
    groupId: 4,
    groupName: "globalIT",
    type: "Windows",
    syncedWithCloud: true,
    groups: undefined,
    description: undefined,
    whenCreated: new Date('October 19, 2022 22:50:00'),
  },



]
