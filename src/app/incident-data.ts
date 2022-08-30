import { priority } from "./priority";
import { impact } from "./impact";

export interface IncidentData {
  username: string | null;
  requestedFor: string | null;
  category: string | null;
  subcategory: string | null;
  configurationItem: string | null;
  priority: priority | null;
  impact: impact | null;
  shortDescription: string | null;
  longDescription: string | null;
}
