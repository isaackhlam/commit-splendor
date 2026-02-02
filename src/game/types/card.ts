import type {GemColour, GemCost} from "./gem";

export interface Card {
  id: string;
  tier: 1 | 2 | 3;
  cost: GemCost;
  bonus: GemColour;
  points: number;
}
