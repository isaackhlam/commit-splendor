import {canGetNoble} from "../rules/canGetNoble";
import {Noble, Player} from "../types";


export const getNoble = (
  player: Player,
  nobles: (Noble | null)[],
) => {
  const gettableNoble = nobles.map(() => false);
  for(let i = 0; i < nobles.length; i++){
    const currentNoble = nobles[i];
    if(currentNoble && canGetNoble(player, currentNoble)) {
      gettableNoble[i] = true;
    }
  }
  const numOfgetbaleNoble = gettableNoble.reduce((sum: number, x: boolean) => sum + (x? 1: 0), 0);
  if(numOfgetbaleNoble === 0) return;
  let idx;
  if(numOfgetbaleNoble === 1) {
    idx = gettableNoble.indexOf(true);
  }else{
    //!! TODO: Ask selection of noble if multiple noble could be get.
    idx = 0; // Placeholder now.
  }
  const noble = nobles[idx]!;
  player.nobles.push(noble);
  nobles[idx] = null;

}
