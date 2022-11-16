export interface Groups {
  groupId: number;
  groupName: string;
  type: "Linux" | "Windows";
  syncedWithCloud: Boolean;
  groups?: Groups;
  description?: string;
  whenCreated: Date;

}
