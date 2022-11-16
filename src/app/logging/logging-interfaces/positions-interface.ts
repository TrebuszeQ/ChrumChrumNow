export interface Positions {
  positionID: number;
  positionName: string;
  description?: string;
  reportsTo?: Positions;
};
