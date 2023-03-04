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
    // בדיקה שהמלך עדין לא זז
    if (king.orderOfMovements.length === 1) {
      // הכוונה רק למשבצות שנמצאות באותה שורה
      if (this.forTool.location.row == Number(div.id[0])) {
        // ### הצרחה קצרה ###
        // הכוונה רק לשני המשבצות הספציפיות בהם המלך יכול לזוז
        if (this.forTool.location.col == Number(div.id[1]) - 2) {
          // פתיחת המשבצות
          div.setAttribute("ondrop", "drop(event)");
          div.setAttribute("ondragover", "allowDrop(event)");
          // בדיקה שהמשבצת ריקה
          if (!div.querySelector("img")) {
            // שינוי צבע המשבצות
            div.setAttribute("data-toggle", "canMove");
          }
          // הוספת אירוע גרירה למלך
          king.htmlElement.addEventListener("dragend", () => {
            // בדיקה נוספת שמלך בתורו הראשון
            if (king.orderOfMovements.length == 1) {
              // השמת משבצת המעבר(המשבצת בין המלך לצריח) בתוך משתנה
              let tool = document
                .getElementById(`${king.location.row}7`)
                ?.querySelector("img") as HTMLElement;
              // בדיקה אם המשבצת מכילה כרגע מלך
              if (tool.id[1] == "k") {
                // השמת מיקום הצריח הישן בתוך משתנה בכדי לפנות דרכו לצריח
                let rookOldLocation = document.getElementById(
                  `${this.forTool.location.row}8`
                ) as HTMLElement;
                let rookfor = rookOldLocation.querySelector("img")!;
                //  מחיקת הצריח מהמיקום הישן
                rookOldLocation.removeChild(rookfor);
                // השמת הצריח במקום החדש
                document
                  .getElementById(`${this.forTool.location.row}6`)
                  ?.appendChild(rookfor);
              }
            }
          });
        } else {
          //  #### הצרחה ארוכה ####
          // הכוונה רק לשני המשבצות הספציפיות בהם המלך יכול לזוז

          if (this.forTool.location.col == Number(div.id[1]) + 2) {
            // בדיקה ספציפית שהפרש זז ממקומו בכל שאר המקרים המלך לא יכול ממילא לזוז
            if (
              document.getElementById(`${this.forTool.location.row}2`)?.children
                .length == 0
            ) {
              div.setAttribute("ondrop", "drop(event)");
              div.setAttribute("ondragover", "allowDrop(event)");
              if (!div.querySelector("img")) {
                div.setAttribute("data-toggle", "canMove");
              }

              // הוספת אירוע גרירה למלך
              king.htmlElement.addEventListener("dragend", () => {
                // בדיקה נוספת שמלך בתורו הראשון
                if (king.orderOfMovements.length == 1) {
                  // השמת משבצת המעבר(המשבצת בין המלך לצריח) בתוך משתנה
                  let tool = document
                    .getElementById(`${king.location.row}3`)
                    ?.querySelector("img") as HTMLElement;
                  // בדיקה אם המשבצת מכילה כרגע מלך
                  if (tool.id[1] == "k") {
                    // השמת מיקום הצריח הישן בתוך משתנה בכדי לפנות דרכו לצריח
                    let rookOldLocation = document.getElementById(
                      `${this.forTool.location.row}1`
                    ) as HTMLElement;
                    let rookfor = rookOldLocation.querySelector("img")!;
                    //  מחיקת הצריח מהמיקום הישן
                    rookOldLocation.removeChild(rookfor);
                    // השמת הצריח במקום החדש
                    document
                      .getElementById(`${this.forTool.location.row}4`)
                      ?.appendChild(rookfor);
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
