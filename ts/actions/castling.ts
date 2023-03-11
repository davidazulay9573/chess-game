import { game, openSlots } from "../script.js";
import { GameTool } from "../game_tools/tools.js";
export function castling(div: HTMLElement, king: GameTool) {

      if (king.location.row == Number(div.id[0])) {
        if (king.location.col == Number(div.id[1]) - 2 ) {
           
           if (king.orderOfMovements.length == 1) {
             openSlots(div, king.color);
        
           }
          king.htmlElement.addEventListener("dragend", () => {
              
                  let tool = document
                    .getElementById(`${king.location.row}7`)
                    ?.querySelector("img") as HTMLElement;
                  if (tool.id[1] == "k") {
                    let rookOldLocation = document.getElementById(
                      `${king.location.row}8`
                    ) as HTMLElement;
                    let rookfor = rookOldLocation.querySelector("img")!;
                    rookOldLocation.removeChild(rookfor);
                    document
                      .getElementById(`${king.location.row}6`)
                      ?.appendChild(rookfor);
                  }
                
            king.setsOfMovs();
            king.Initialize();
              // game.stste = "w";
              game.stepsList.push(king);

              game.white.forEach((tool2) => {
                tool2.setsOfMovs();
                tool2.Initialize();
                tool2.checkIfMovingAllowed();
                // stratDetention(, king, this.black);
                // diagonalDetention(tool, king, this.black);
              });
              game.black.forEach((tool2) => {
                tool2.setsOfMovs();
                tool2.Initialize();

                tool2.checkIfMovingAllowed();
                // stratDetention(tool, kingW, this.white);
                // diagonalDetention(tool, kingW, this.white);
              });
          });
        } else {
          if (king.location.col == Number(div.id[1]) + 2) {
            if (
              document.getElementById(`${king.location.row}2`)?.children
                .length == 0
            ) {
               if (king.orderOfMovements.length == 1) {
                openSlots(div, king.color);
                 
               }
              king.htmlElement.addEventListener("dragend", () => {
                  if (
                    king.orderOfMovements.length == 1 &&
                    king.orderOfMovements.length == 1
                  ) {
                    let tool = document
                      .getElementById(`${king.location.row}3`)
                      ?.querySelector("img") as HTMLElement;
                    if (tool.id[1] == "k") {
                      let rookOldLocation = document.getElementById(
                        `${king.location.row}1`
                      ) as HTMLElement;
                      let rookfor = rookOldLocation.querySelector("img")!;
                      rookOldLocation.removeChild(rookfor);
                      document
                        .getElementById(`${king.location.row}4`)
                        ?.appendChild(rookfor);
                    }
                  }
                king.Initialize();
                king.setsOfMovs();
                
                 king.checkIfMovingAllowed();
           
                 // game.stste = "w";
                 game.stepsList.push(king);

                 game.white.forEach((tool2) => {
                   tool2.setsOfMovs();
                   tool2.Initialize();
                   tool2.checkIfMovingAllowed();
                  //  stratDetention(, king, this.black);
                  //  diagonalDetention(tool, king, this.black);
                 });
                 game.black.forEach((tool2) => {
                   tool2.setsOfMovs();
                   tool2.Initialize();
                   tool2.checkIfMovingAllowed();
                   // stratDetention(tool, kingW, this.white);
                   // diagonalDetention(tool, kingW, this.white);
                 });
              });
            }
          }
        }
      }
  

    
    
  }