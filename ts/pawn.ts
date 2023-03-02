import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Pawn extends GameTool {
  public startPoint: number | undefined;
  constructor(color: string, type: string, img: string) {
    super(color, type, img);
    {
      this.startPoint;
    }
  }
  setsOfMovs(): void {
    let divs = this.chesBoard.querySelectorAll("div");
    divs.forEach((div) => {
      if (this.startPoint == 2) {
        if (this.location.row == 2) {
          if (
            this.location.row == Number(div.id[0]) - 2 &&
            this.location.col == Number(div.id[1])
          ) {
            if (!div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              // div.classList.add("soltsCanMov");
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) - 1
        ) {
          if (!div.querySelector("img")) {
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            // div.classList.add("soltsCanMov");
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) - 1) {
            if (div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              // div.classList.add("soltsCanMov");
            }
          }
        }
      }
      if (this.startPoint == 7) {
        if (this.location.row == 7) {
          if (
            this.location.row == Number(div.id[0]) + 2 &&
            this.location.col == Number(div.id[1])
          ) {
            if (!div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              // div.classList.add("soltsCanMov");
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) + 1
        ) {
          if (!div.querySelector("img")) {
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            // div.classList.add("soltsCanMov");
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) + 1) {
            if (div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              // div.classList.add("soltsCanMov");
            }
          }
        }
      }
    });
      new Skipping(this.location).skipLimitStrat();
    
  }
}
