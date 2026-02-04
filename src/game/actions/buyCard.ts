import {canBuyCard} from "../rules/canBuyCard";
import type {Bank, Card, GemColour, OrdinaryGemColour, Player} from "../types";


export const buyCard = (
  player: Player,
  card: Card,
  bank: Bank,
  decks: Record<number, Card[]>,
  board: Record<number, Card[]>,
) => {
  if(canBuyCard(player, card)) {
    // Pay for the card
    const discounts: Record<GemColour, number> = player.discount;
    for(const colour in card.cost) {
      const gemColour = colour as OrdinaryGemColour;

      const cost = card.cost[gemColour] ?? 0;
      if (cost === 0) continue;
      const discount = discounts[gemColour];

      let gemNeeded = cost - discount;
      if(cost > gemNeeded) {
        const goldNeeded = cost - gemNeeded;
        player.tokens["gold"] -= goldNeeded;
        bank.gold += goldNeeded;
        gemNeeded -= goldNeeded;
      }
      player.tokens[gemColour] -= gemNeeded;
      bank[gemColour] += gemNeeded;
    }
    // Add card into hand and refill
    player.cards.push(card);
    const cardTier = card.tier as number;
    const boardRow = board[cardTier];
    const deck = decks[cardTier];
    if (boardRow && deck) {
      const cardNumber = boardRow.indexOf(card);

      if(cardNumber !== -1) {
        const newCard = deck.pop();

        if(newCard) {
          boardRow[cardNumber] = newCard;
        } else {
          boardRow.splice(cardNumber, 1);
        }
      }
    }
  } else {
    console.log("No enough gems to buy card.")
  }
}
