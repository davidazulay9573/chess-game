import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
import { openSlots } from "./script.js";

export class Queen extends GameTool {
  public setsOfMovs(): void {
    this.possibleSlots = [];
    let divs = this.chesBoard.querySelectorAll("div");
    let divsCanMove = Array.from(divs).filter((div) => {
      return (
        this.location.row == Number(div.id[0]) ||
        this.location.col == Number(div.id[1]) ||
        this.location.row - Number(div.id[0]) ==
          this.location.col - Number(div.id[1]) ||
        Number(div.id[0]) - this.location.row ==
          this.location.col - Number(div.id[1])
      );
    });

    divsCanMove.forEach((div) => {
      this.possibleSlots.push(Number(div.id));

      openSlots(div, this.color);
    });

    this.checkIfMovingAllowed();
    let skip = new Skipping(this);
    skip.skipLimitStrat();
    skip.skipLimitDiagonal();

    this.possibleSlots = this.possibleSlots.filter((location) => {
      return location != Number(`${this.location.row}${this.location.col}`);
    });
  }
}
