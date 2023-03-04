import { King } from "./king.js";
import { Rook } from "./rook.js";
import { GameTool } from "./tools";
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
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");

                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
              }
            });
          }
          if (this.forTool.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[0]) > Number(tool.parentElement!.id[0])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
              }
            });
          }
        }
        if (Number(tool.parentElement!.id[0]) == this.forTool.location.row) {
          if (this.forTool.location.col < Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) > Number(tool.parentElement!.id[1])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
              }
            });
          }
          if (this.forTool.location.col > Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) < Number(tool.parentElement!.id[1])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
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
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");

                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
              }
            });
          }
          if (this.forTool.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) > Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) < Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");

                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
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
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");

                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
              }
            });
          }
          if (this.forTool.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) < Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) > Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");

                this.forTool.possibleSlots.forEach((location) => {
                  if (location == Number(div.id)) {
                    let index = this.forTool.possibleSlots.indexOf(location);
                    this.forTool.possibleSlots.splice(index, 1);
                  }
                });
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
          div.setAttribute("ondrop", "drop(event)");
          div.setAttribute("ondragover", "allowDrop(event)");
          if (
            !div.querySelector("img") ||
            div.querySelector("img")?.id[0] != king.color
          ) {
            div.setAttribute("data-toggle", "canMove");
          }

          king.htmlElement.addEventListener("dragend", () => {
            if (king.orderOfMovements.length == 1) {
              let tool = document
                .getElementById(`${king.location.row}7`)
                ?.querySelector("img") as HTMLElement;
              if (tool.id[1] == "k") {
                let rookOldLocation = document.getElementById(
                  `${this.forTool.location.row}8`
                ) as HTMLElement;
                rookOldLocation.querySelector("img")?.remove();
                const rook = new Rook(
                  king.color,
                  `${king.color}rook1`,
                  `./${king.color.toLowerCase()}R.png`
                );

                document
                  .getElementById(`${this.forTool.location.row}6`)
                  ?.appendChild(rook.htmlElement);
                rook.htmlElement.addEventListener("mousedown", () => {
                  rook.Initialize();
                });
              }
            }
          });
        } else {
          if (this.forTool.location.col == Number(div.id[1]) + 2) {
            if (
              document.getElementById(`${this.forTool.location.row}2`)?.children
                .length == 0
            ) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != king.color
              ) {
                div.setAttribute("data-toggle", "canMove");
                div.setAttribute("data-values", JSON.stringify([king]));
              }

              king.htmlElement.addEventListener("dragend", (event) => {
                if (king.orderOfMovements.length == 1) {
                  console.log(1);

                  let tool = document
                    .getElementById(`${this.forTool.location.row}3`)
                    ?.querySelector("img") as HTMLElement;
                  if (tool.id[1] == "k") {
                    let rookOldLocation = document.getElementById(
                      `${this.forTool.location.row}1`
                    ) as HTMLElement;
                    rookOldLocation.querySelector("img")?.remove();
                    const rook = new Rook(
                      king.color,
                      `${king.color}rook2`,
                      `./${king.color.toLowerCase()}R.png`
                    );

                    document
                      .getElementById(`${this.forTool.location.row}4`)
                      ?.appendChild(rook.htmlElement);
                    rook.htmlElement.addEventListener("mousedown", () => {
                      rook.Initialize();
                      console.log(rook.location);
                    });
                  }
                }
              });
            }
          }
        }
      }
    }
  }
}
