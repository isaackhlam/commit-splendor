import type {GemColour, Noble, Player} from "../types";

export canGetNoble = (
  player: Player;
  noble: Noble;
): boolean => {
  const resources = player.discount;
  for(const colour in noble.requirement) {
    const gemColour = colour as Exclude<GemColour, "gold">;

    const cost = noble.requirement[gemColour] ?? 0;
    if(resources[gemColour] < cost) {
      return false;
    }
  }
  return true;
}
