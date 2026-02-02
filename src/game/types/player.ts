import type {GemColour} from "./gem";
import type {Noble} from "./noble";
import type { Card } from "./card";

export interface Player {
  id: string;
  tokens: Record<GemColour, number>;
  cards: Card[];
  reserved: Card[];
  nobles: Noble[];
  discount: Record<GemColour, number>;
}
