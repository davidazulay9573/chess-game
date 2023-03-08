import { King } from "./king.js";
import { GameTool } from "./tools";
import { openSlots, closSlots } from "./script.js";
export class Skipping {
  private chesBoard: HTMLElement;
  forTool: GameTool;
  constructor(tool: GameTool) {
    this.chesBoard = document.querySelector("#chessboard")!;
    this.forTool = tool;
  }
  skipLimitStrat() {
    let divs = this.chesBoard.querySelectorAll("div");
    let filterDivs = Array.from(divs).filter((div) => {
      return (
        this.forTool.location.col == Number(div.id[1]) ||
        this.forTool.location.row == Number(div.id[0])
      );
    });

    filterDivs.forEach((div) => {
      let tool = div.querySelector("img")!;
      if (div.querySelector("img")) {
        if (Number(tool.parentElement!.id[1]) == this.forTool.location.col) {
          if (this.forTool.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[0]) < Number(tool.parentElement!.id[0])) {
                closSlots(div, this.forTool);
              }
            });
          }
          if (this.forTool.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[0]) > Number(tool.parentElement!.id[0])) {
                closSlots(div, this.forTool);
              }
            });
          }
        }
        if (Number(tool.parentElement!.id[0]) == this.forTool.location.row) {
          if (this.forTool.location.col < Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) > Number(tool.parentElement!.id[1])) {
                closSlots(div, this.forTool);
              }
            });
          }
          if (this.forTool.location.col > Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) < Number(tool.parentElement!.id[1])) {
                closSlots(div, this.forTool);
              }
            });
          }
        }
      }
    });
  }
  skipLimitDiagonal() {
    let divs = this.chesBoard.querySelectorAll("div");
    let filterDivs = Array.from(divs).filter((div) => {
      return (
        this.forTool.location.row - Number(div.id[0]) ==
          this.forTool.location.col - Number(div.id[1]) ||
        Number(div.id[0]) - this.forTool.location.row ==
          this.forTool.location.col - Number(div.id[1])
      );
    });
    filterDivs.forEach((div) => {
      let tool = div.querySelector("img")!;
      if (div.querySelector("img")) {
        if (this.forTool.location.col < Number(tool.parentElement!.id[1])) {
          if (this.forTool.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) > Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) > Number(tool.parentElement!.id[0])
              ) {
                closSlots(div, this.forTool);
              }
            });
          }
          if (this.forTool.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) > Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) < Number(tool.parentElement!.id[0])
              ) {
                closSlots(div, this.forTool);
              }
            });
          }
        }
        if (this.forTool.location.col > Number(tool.parentElement!.id[1])) {
          if (this.forTool.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) < Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) < Number(tool.parentElement!.id[0])
              ) {
                closSlots(div, this.forTool);
              }
            });
          }
          if (this.forTool.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) < Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) > Number(tool.parentElement!.id[0])
              ) {
                closSlots(div, this.forTool);
              }
            });
          }
        }
      }
    });
  }
  castling(div: HTMLElement, king: King) {
    if (king.orderOfMovements.length === 1) {
      if (this.forTool.location.row == Number(div.id[0])) {
        if (this.forTool.location.col == Number(div.id[1]) - 2) {
          openSlots(div, king.color);
          king.htmlElement.addEventListener("dragend", () => {
            if (king.orderOfMovements.length == 1) {
              let tool = document
                .getElementById(`${king.location.row}7`)
                ?.querySelector("img") as HTMLElement;
              if (tool.id[1] == "k") {
                let rookOldLocation = document.getElementById(
                  `${this.forTool.location.row}8`
                ) as HTMLElement;
                let rookfor = rookOldLocation.querySelector("img")!;
                rookOldLocation.removeChild(rookfor);
                document
                  .getElementById(`${this.forTool.location.row}6`)
                  ?.appendChild(rookfor);
              }
            }
            king.setsOfMovs();
            king.Initialize();
          });
        } else {
          if (this.forTool.location.col == Number(div.id[1]) + 2) {
            if (
              document.getElementById(`${this.forTool.location.row}2`)?.children
                .length == 0
            ) {
              openSlots(div, king.color);
              king.htmlElement.addEventListener("dragend", () => {
                if (king.orderOfMovements.length == 1) {
                  let tool = document
                    .getElementById(`${king.location.row}3`)
                    ?.querySelector("img") as HTMLElement;
                  if (tool.id[1] == "k") {
                    let rookOldLocation = document.getElementById(
                      `${this.forTool.location.row}1`
                    ) as HTMLElement;
                    let rookfor = rookOldLocation.querySelector("img")!;
                    rookOldLocation.removeChild(rookfor);
                    document
                      .getElementById(`${this.forTool.location.row}4`)
                      ?.appendChild(rookfor);
                  }
                }
                king.setsOfMovs();
                king.Initialize();
              });
            }
          }
        }
      }
    }
  }
}
