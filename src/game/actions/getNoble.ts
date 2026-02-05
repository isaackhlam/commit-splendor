import {canGetNoble} from "../rules/canGetNoble";
import {Noble, Player} from "../types";


export const getNoble = async (
  player: Player,
  nobles: (Noble | null)[],
  chooseIndex: (options: number[]) => Promise<number>,
) => {
  const options = nobles
    .map((n, i) => (n && canGetNoble(player, n) ? i : -1))
    .filter(i => i !== -1);

  if (options.length === 0) return;

  const idx =
    options.length === 1
      ? options[0]
      : await chooseIndex(options);

  const noble = nobles[idx]!;
  player.nobles.push(noble);
  nobles[idx] = null;
}
