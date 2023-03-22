import { GameTool } from "./gameTool.js";
import { openSlots } from "../actions/closeAndOpenSlots.js";
import { skipLimitStrat } from "../rules/skipLimitStrate.js";
import  {changeToKueen} from '../actions/changeToQueen.js'
import { game } from "../script.js";

export class Pawn extends GameTool {
  public startPoint: number | undefined;

  constructor(
    color: string,
    type: string,
    img: string,
    friendsToFight: GameTool[],
    enemies:GameTool[]
  ) {
    super(color, type, img, enemies, friendsToFight);
    {
      this.startPoint;
    }
  }

  setsOfMovs(): void {
    this.possibleSlots = [];
    this.posibleToEat = [];
    const divs = document.getElementById("chessboard")!.querySelectorAll("div");

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
              this.possibleSlots.push(Number(div.id));

              openSlots(div, this.color);
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) - 1
        ) {
          if (!div.querySelector("img")) {
            this.possibleSlots.push(Number(div.id));

            openSlots(div, this.color);
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) - 1) {
            this.posibleToEat.push(Number(div.id));

            if (div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }

          if (this.location.row == 5) {
            let pawns = game.white.filter((pawn) => {
              return pawn.type[1] == "p";
            });

            pawns.forEach((pawn) => {
              if (this.location.row == pawn.location.row) {
                if (
                  this.location.col == pawn.location.col - 1 ||
                  this.location.col == pawn.location.col + 1
                ) {
                  if (pawn.orderOfMovements.length == 2) {
                    let id = this.location.row + 1 + div.id[1];
                    let divSpecialMov = document.getElementById(id)!;
                    if (Number(id[1]) == pawn.location.col) {
                      if (game.stepsList[game.stepsList.length - 1] == pawn) {
                        openSlots(divSpecialMov!, this.color);
                        this.htmlElement.addEventListener("dragend", () => {
                          if (
                            this.location.row == Number(id[0]) &&
                            this.location.col == Number(id[1])
                          ) {
                            pawn.htmlElement.remove();
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
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
              this.possibleSlots.push(Number(div.id));

              openSlots(div, this.color);
            }
          }
        }
        if (
          this.location.col == Number(div.id[1]) &&
          this.location.row == Number(div.id[0]) + 1
        ) {
          if (!div.querySelector("img")) {
            this.possibleSlots.push(Number(div.id));

            openSlots(div, this.color);
          }
        }
        if (
          this.location.col == Number(div.id[1]) - 1 ||
          this.location.col == Number(div.id[1]) + 1
        ) {
          if (this.location.row == Number(div.id[0]) + 1) {
            this.posibleToEat.push(Number(div.id));

            if (div.querySelector("img")) {
              openSlots(div, this.color);
            }
          }
          if (this.location.row == 4) {
            let pawns = game.black.filter((pawn) => {
              return pawn.type[1] == "p";
            });

            pawns.forEach((pawn) => {
              if (this.location.row == pawn.location.row) {
                if (
                  this.location.col == pawn.location.col - 1 ||
                  this.location.col == pawn.location.col + 1
                ) {
                  if (pawn.orderOfMovements.length == 2) {
                    let id = this.location.row - 1 + div.id[1];
                    let divSpecialMov = document.getElementById(id)!;
                    if (Number(id[1]) == pawn.location.col) {
                      if (game.stepsList[game.stepsList.length - 1] == pawn) {
                        openSlots(divSpecialMov!, this.color);
                        this.htmlElement.addEventListener("dragend", () => {
                          if (
                            this.location.row == Number(id[0]) &&
                            this.location.col == Number(id[1])
                          ) {
                            pawn.htmlElement.remove();
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
    this.checkIfMovingAllowed();
    skipLimitStrat(this);
  }
}
