import { GameTool } from "./tools.js";
import { Skipping } from "./skipping.js";
export class King extends GameTool {
  enemies: GameTool[];
  friendsToFight: GameTool[];

  constructor(
    color: string,
    type: string,
    img: string,
    opponentsTools: GameTool[],
    friendsToFight: GameTool[]
  ) {
    super(color, type, img);
    {
      this.enemies = opponentsTools;
      this.friendsToFight = friendsToFight;
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
          this.possibleSlots.push(Number(div.id));

          div.setAttribute("ondrop", "drop(event)");
          div.setAttribute("ondragover", "allowDrop(event)");

          if (
            !div.querySelector("img") ||
            div.querySelector("img")?.id[0] != this.type[0]
          ) {
            div.setAttribute("data-toggle", "canMove");
          } else {
          }
          this.enemies.forEach((tool) => {
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
      this.enemies.forEach((tool) => {
        if (!document.getElementById(tool.type)) {
          tool.possibleSlots = [];
          tool.location.row = -1;
          tool.location.col = -1;
        }
      });

      this.friendsToFight.forEach((tool) => {
        if (!document.getElementById(tool.type)) {
          tool.possibleSlots = [];
          tool.location.row = -1;
          tool.location.col = -1;
        }
      });
      let skip = new Skipping(this);
      skip.skipLimitStrat();
      skip.castling(div, this);
      this.possibleSlots = this.possibleSlots.filter((location) => {
        return location != Number(this.htmlElement.parentElement!.id);
      });
    });
  }
}
