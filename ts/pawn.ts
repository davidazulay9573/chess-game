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
    this.possibleSlots = [];
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
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != this.color
              ) {
                div.setAttribute("data-toggle", "canMove");
              }
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
            if (
              !div.querySelector("img") ||
              div.querySelector("img")?.id[0] != this.color
            ) {
              div.setAttribute("data-toggle", "canMove");
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) - 1) {
            this.possibleSlots.push(Number(div.id));

            if (div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != this.color
              ) {
                div.setAttribute("data-toggle", "canMove");
                console.log(this.possibleSlots);

                if (div.querySelector("img")?.id[1] == "k") {
                  div.setAttribute("data-toggle", "shach");
                }
              }
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
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != this.color
              ) {
                div.setAttribute("data-toggle", "canMove");
              }
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
            if (
              !div.querySelector("img") ||
              div.querySelector("img")?.id[0] != this.color
            ) {
              div.setAttribute("data-toggle", "canMove");
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) + 1) {
            this.possibleSlots.push(Number(div.id));

            if (div.querySelector("img")) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != this.color
              ) {
                div.setAttribute("data-toggle", "canMove");

                if (div.querySelector("img")?.id[1] == "k") {
                  div.setAttribute("data-toggle", "shach");
                }
              }
            }
          }
        }
      }
    });
    new Skipping(this).skipLimitStrat();
  }
}
