import { Queen } from "./queen.js";
import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
import { game } from "./script.js";
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
        let divForNewQueen = this.htmlElement.parentElement!;
        this.htmlElement.remove();
        const newQueen2 = new Queen(
          this.color,
          `Bnq${this.type}`,
          `./${this.color.toLowerCase()}Q.png`
        );
        divForNewQueen.appendChild(newQueen2.htmlElement);
        divForNewQueen.appendChild(newQueen2.htmlElement);
        game.black.push(newQueen2);

        newQueen2.Initialize();
        newQueen2.setsOfMovs();

        newQueen2.htmlElement.addEventListener("mousedown", () => {
          newQueen2.Initialize();
          newQueen2.setsOfMovs();
        });
        newQueen2.htmlElement.addEventListener("dragend", () => {
          newQueen2.Initialize();
          newQueen2.setsOfMovs();
          game.white.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
          game.black.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
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
        let divForNewQueen = this.htmlElement.parentElement!;
        this.htmlElement.remove();
        const newQueen2 = new Queen(
          this.color,
          `Wnq${this.type}`,
          `./${this.color.toLowerCase()}Q.png`
        );
        divForNewQueen.appendChild(newQueen2.htmlElement);

        game.white.push(newQueen2);

        newQueen2.Initialize();
        newQueen2.setsOfMovs();

        newQueen2.htmlElement.addEventListener("mousedown", () => {
          newQueen2.Initialize();
          newQueen2.setsOfMovs();
        });
        newQueen2.htmlElement.addEventListener("dragend", () => {
          newQueen2.Initialize();
          newQueen2.setsOfMovs();
          game.white.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
          game.black.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
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
    this.checkIfMovingAllowed();
    new Skipping(this).skipLimitStrat();
  }
}
