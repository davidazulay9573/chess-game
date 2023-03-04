import { GameTool } from "./tools.js";
import { Skipping } from "./skipping.js";
export class King extends GameTool {
  opponentsTools: GameTool[];
  constructor(
    color: string,
    type: string,
    img: string,
    opponentsTools: GameTool[]
  ) {
    super(color, type, img);
    {
      this.opponentsTools = opponentsTools;
    }
  }
  setsOfMovs(): void {
    this.possibleSlots = [];
    let divs = this.chesBoard.querySelectorAll("div");
    divs.forEach((div) => {
      if (
        this.location.row == Number(div.id[0]) ||
        this.location.row == Number(div.id[0]) + 1 ||
        this.location.row == Number(div.id[0]) - 1
      ) {
        if (
          this.location.col == Number(div.id[1]) ||
          this.location.col == Number(div.id[1]) + 1 ||
          this.location.col == Number(div.id[1]) - 1
        ) {
          div.setAttribute("ondrop", "drop(event)");
          div.setAttribute("ondragover", "allowDrop(event)");
          this.possibleSlots.push(Number(div.id));

          if (
            !div.querySelector("img") ||
            div.querySelector("img")?.id[0] != this.type[0]
          ) {
            div.setAttribute("data-toggle", "canMove");
          }
          this.opponentsTools.forEach((tool) => {
            tool.possibleSlots.forEach((location) => {
              if (Number(div.id) == location) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          });
        }
      }
      let skip = new Skipping(this);
      skip.skipLimitStrat();
      skip.castling(div, this);
    });
  }
}
