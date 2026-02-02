import type {Card} from "./card";
import type {GemColour} from "./gem";
import type {Noble} from "./noble";
import type {Player} from "./player";

export interface GameState {
  players: Player[];
  currentPlayer: number;
  bank: Record<GemColour, number>;
  decks: {
    1: Card[];
    2: Card[];
    3: Card[];
  };
  board: {
    1: Card[];
    2: Card[];
    3: Card[];
  };
  nobles: Noble[];
}
