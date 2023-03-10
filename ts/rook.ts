import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
import { openSlots, game } from "./script.js";
import { skipLimitStrat } from "./skipLimitStrate.js";
export class Rook extends GameTool {
  setsOfMovs(): void {
    this.possibleSlots = [];
    let divs = this.chesBoard.querySelectorAll("div");
    let divsCanMove = Array.from(divs).filter((div) => {
      return (
        this.location.col == Number(div.id[1]) ||
        this.location.row == Number(div.id[0])
      );
    });

    divsCanMove.forEach((div) => {
      this.possibleSlots.push(Number(div.id));
      let myKing = game.white.filter((tool) => {
        return tool.type[1] == "k";
      })[0];

      openSlots(div, this.color);
    });
    skipLimitStrat(this);
    this.checkIfMovingAllowed();
    this.possibleSlots = this.possibleSlots.filter((location) => {
      return location != Number(`${this.location.row}${this.location.col}`);
    });
  }
}
