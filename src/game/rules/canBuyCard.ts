import type {Card, GemColour, OrdinaryGemColour, Player} from "../types";

export const canBuyCard = (
  player: Player,
  card: Card,
): boolean => {
  let numOfGold: number = player.tokens["gold"];
  const discounts: Record<GemColour, number> = player.discount;
  for(const colour in card.cost) {
    const gemColour = colour as OrdinaryGemColour;

    const cost = card.cost[gemColour] ?? 0;
    const numOfToken = player.tokens[gemColour];
    const discount = discounts[gemColour];
    numOfGold -= Math.min(cost - (numOfToken + discount), 0);
  }
  return numOfGold >= 0;
}
