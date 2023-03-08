import { Queen } from "./queen.js";
import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
import { game, changeToKueen, openSlots } from "./script.js";
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
        changeToKueen(this);
      }
      divs.forEach((div) => {
        if (this.location.row == 2) {
          if (
            this.location.row == Number(div.id[0]) - 2 &&
            this.location.col == Number(div.id[1])
          ) {
            if (!div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) - 1
        ) {
          if (!div.querySelector("img")) {
            openSlots(div, this.color);
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) - 1) {
            this.possibleSlots.push(Number(div.id));

            if (div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }
        }
      });
    }
    if (this.startPoint == 7) {
      if (this.location.row == 1) {
        changeToKueen(this);
      }
      divs.forEach((div) => {
        if (this.location.row == 7) {
          if (
            this.location.row == Number(div.id[0]) + 2 &&
            this.location.col == Number(div.id[1])
          ) {
            if (!div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) + 1
        ) {
          if (!div.querySelector("img")) {
            openSlots(div, this.color);
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) + 1) {
            this.possibleSlots.push(Number(div.id));

            if (div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }
        }
      });
    }
    this.checkIfMovingAllowed();
    new Skipping(this).skipLimitStrat();
  }
}
