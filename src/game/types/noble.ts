import type {GemCost} from "./gem";

export interface Noble {
  id: string;
  requirement: GemCost;
  points: 3;
}
