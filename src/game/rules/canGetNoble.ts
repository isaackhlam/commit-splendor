import type {GemColour, Noble, OrdinaryGemColour, Player} from "../types";

export const canGetNoble = (
  player: Player,
  noble: Noble,
): boolean => {
  const resources = player.discount;
  for(const colour in noble.requirement) {
    const gemColour = colour as OrdinaryGemColour;

    const cost = noble.requirement[gemColour] ?? 0;
    if(resources[gemColour] < cost) {
      return false;
    }
  }
  return true;
}
