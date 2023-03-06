import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";

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

      div.setAttribute("ondrop", "drop(event)");
      div.setAttribute("ondragover", "allowDrop(event)");

      if (
        !div.querySelector("img") ||
        div.querySelector("img")?.id[0] != this.color
      ) {
        div.setAttribute("data-toggle", "canMove");
      }
    });
    this.possibleSlots = this.possibleSlots.filter((location) => {
      return location != Number(`${this.location.row}${this.location.col}`);
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
