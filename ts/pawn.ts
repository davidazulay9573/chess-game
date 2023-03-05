import { Queen } from "./queen.js";
import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Pawn extends GameTool {
  friendsToFight: GameTool[];
  public startPoint: number | undefined;

  constructor(
    color: string,
    type: string,
    img: string,
    friendsToFight: GameTool[]
  ) {
    super(color, type, img);
    {
      this.friendsToFight = friendsToFight;
      this.startPoint;
    }
  }

  setsOfMovs(): void {
    this.possibleSlots = [];
    let divs = this.chesBoard.querySelectorAll("div");

    if (this.startPoint == 2) {
      if (this.location.row == 8) {
        let divForNewQueen = this.htmlElement.parentElement;
        this.htmlElement.remove();
        const newQueen = new Queen(
          this.color,
          `nq${this.type}`,
          `./${this.color.toLowerCase()}Q.png`
        );
        divForNewQueen?.appendChild(newQueen.htmlElement);
        newQueen.Initialize();
        newQueen.setsOfMovs();
        this.friendsToFight.push(newQueen);
        newQueen.htmlElement.addEventListener("dragend", () => {
          newQueen.setsOfMovs();
          newQueen.Initialize();
        });
        newQueen.htmlElement.addEventListener("mousedown", () => {
          newQueen.Initialize();
          newQueen.setsOfMovs();
        });
      }
      divs.forEach((div) => {
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
              }
            }
          }
        }
      });
    }
    if (this.startPoint == 7) {
      if (this.location.row == 1) {
        let divForNewQueen = this.htmlElement.parentElement;
        this.htmlElement.remove();
        let newQueen = new Queen(
          this.color,
          `nq${this.type}`,
          `./${this.color.toLowerCase()}Q.png`
        );

        divForNewQueen?.appendChild(newQueen.htmlElement);

        newQueen.Initialize();
        newQueen.setsOfMovs();
        this.friendsToFight.push(newQueen);

        newQueen.htmlElement.addEventListener("dragend", () => {
          newQueen.setsOfMovs();
          newQueen.Initialize();
        });
        newQueen.htmlElement.addEventListener("mousedown", () => {
          newQueen.Initialize();
          newQueen.setsOfMovs();
        });
      }
      divs.forEach((div) => {
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
              }
            }
          }
        }
      });
    }

    new Skipping(this).skipLimitStrat();
  }
}
function toLowerCase(color: string) {
  throw new Error("Function not implemented.");
}
