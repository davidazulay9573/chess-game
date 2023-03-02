import { King } from "./king.js";
import { Rook } from "./rook.js";
export class Skipping {
  private chesBoard: HTMLElement;
  private location: { row: number; col: number };
  constructor(location: { row: number; col: number }) {
    this.chesBoard = document.querySelector("#chessboard")!;
    this.location = location;
  }
  skipLimitStrat() {
    let divs = this.chesBoard.querySelectorAll("div");
    let filterDivs = Array.from(divs).filter((div) => {
      return (
        this.location.col == Number(div.id[1]) ||
        this.location.row == Number(div.id[0])
      );
    });
    filterDivs.forEach((div) => {
      let tool = div.querySelector("img")!;
      if (div.querySelector("img")) {
        if (Number(tool.parentElement!.id[1]) == this.location.col) {
          if (this.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[0]) < Number(tool.parentElement!.id[0])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
          if (this.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[0]) > Number(tool.parentElement!.id[0])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
        }
        if (Number(tool.parentElement!.id[0]) == this.location.row) {
          if (this.location.col < Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) > Number(tool.parentElement!.id[1])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
          if (this.location.col > Number(tool.parentElement!.id[1])) {
            filterDivs.forEach((div) => {
              if (Number(div.id[1]) < Number(tool.parentElement!.id[1])) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
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
        this.location.row - Number(div.id[0]) ==
          this.location.col - Number(div.id[1]) ||
        Number(div.id[0]) - this.location.row ==
          this.location.col - Number(div.id[1])
      );
    });
    filterDivs.forEach((div) => {
      let tool = div.querySelector("img")!;
      if (div.querySelector("img")) {
        if (this.location.col < Number(tool.parentElement!.id[1])) {
          if (this.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) > Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) > Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
          if (this.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) > Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) < Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
        }
        if (this.location.col > Number(tool.parentElement!.id[1])) {
          if (this.location.row > Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) < Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) < Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
          if (this.location.row < Number(tool.parentElement!.id[0])) {
            filterDivs.forEach((div) => {
              if (
                Number(div.id[1]) < Number(tool.parentElement!.id[1]) &&
                Number(div.id[0]) > Number(tool.parentElement!.id[0])
              ) {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            });
          }
        }
      }
    });
  }
  castling(div: HTMLElement, king: King) {
    if (king.orderOfMovements.length === 1) {
      if (this.location.row == Number(div.id[0])) {
        if (this.location.col == Number(div.id[1]) - 2) {
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
                  `${this.location.row}8`
                ) as HTMLElement;
                rookOldLocation.querySelector("img")?.remove();
                const rook = new Rook(
                  king.color,
                  `${king.color}rook1`,
                  `./${king.color.toLowerCase()}R.png`
                );

                document
                  .getElementById(`${this.location.row}6`)
                  ?.appendChild(rook.htmlElement);
                rook.htmlElement.addEventListener("mousedown", () => {
                  rook.Initialize();
                });
              }
            }
          });
        } else {
          if (this.location.col == Number(div.id[1]) + 2) {
            if (
              document.getElementById(`${this.location.row}2`)?.children
                .length == 0
            ) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              if (
                !div.querySelector("img") ||
                div.querySelector("img")?.id[0] != king.color
              ) {
                div.setAttribute("data-toggle", "canMove");
              }

              king.htmlElement.addEventListener("dragend", (event) => {
                if (king.orderOfMovements.length == 1) {
                  console.log(1);

                  let tool = document
                    .getElementById(`${this.location.row}3`)
                    ?.querySelector("img") as HTMLElement;
                  if (tool.id[1] == "k") {
                    let rookOldLocation = document.getElementById(
                      `${this.location.row}1`
                    ) as HTMLElement;
                    rookOldLocation.querySelector("img")?.remove();
                    const rook = new Rook(
                      king.color,
                      `${king.color}rook2`,
                      `./${king.color.toLowerCase()}R.png`
                    );

                    document
                      .getElementById(`${this.location.row}4`)
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
