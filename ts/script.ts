import { Chessboard } from "./board.js";
import { Game } from "./game.js";
import { GameTool } from "./tools.js";
import { Queen } from "./queen.js";
import { Rook } from "./rook";
import { King } from "./king";

const container = document.getElementById("chessboard") as HTMLDivElement;

export const game = new Game(container);
game.createTools();

export function openSlots(slotPR: HTMLElement, color: string) {
  slotPR.setAttribute("ondrop", "drop(event)");
  slotPR.setAttribute("ondragover", "allowDrop(event)");

  if (
    !slotPR.querySelector("img") ||
    slotPR.querySelector("img")?.id[0] != color
  ) {
    slotPR.setAttribute("data-toggle", "canMove");
  }
}

export function closSlots(slotPR: HTMLElement, toolPR: GameTool) {
  slotPR.removeAttribute("ondrop");
  slotPR.removeAttribute("ondragover");
  slotPR.removeAttribute("data-toggle");

  toolPR.possibleSlots.forEach((location) => {
    if (location == Number(slotPR.id)) {
      let index = toolPR.possibleSlots.indexOf(location);
      toolPR.possibleSlots.splice(index, 1);
    }
  });
}
export function onlyClosSlots(slotPR: HTMLElement, toolPR: GameTool) {
  slotPR.removeAttribute("ondrop");
  slotPR.removeAttribute("ondragover");
  slotPR.removeAttribute("data-toggle");
  
}
export function checkMovingAllowed(
  toolPR: GameTool,
  enemies: GameTool[],
  friendsToFight: GameTool[]
) {
  let myKing = friendsToFight.filter((tool) => {
    return tool.type[1] == "k";
  })[0];

  enemies.forEach((enemyTool) => {
    if (
      enemyTool.possibleSlots.includes( Number(myKing.htmlElement.parentElement!.id) 
      )
    ) {
      let divs = toolPR.chesBoard.querySelectorAll("div");
      divs.forEach((div) => {
        if (Number(enemyTool.htmlElement.parentElement!.id) == Number(div.id)) {
       
        } else {
         onlyClosSlots(div,toolPR)
          if (
            enemyTool.possibleSlots.includes(Number(div.id)) &&
            toolPR.possibleSlots.includes(Number(div.id))
          ) {
            if (enemyTool.location.col == myKing.location.col) {
              if (Number(div.id[1]) == myKing.location.col) {
                if ( myKing.location.row < enemyTool.location.row ) {
                  if (  Number(div.id[0]) < enemyTool.location.row ) {
                  if (  Number(div.id[0]) > myKing.location.row ) {
                    openSlots(div, toolPR.color);

                  }
                    
                  }
                }
                  if (myKing.location.row > enemyTool.location.row) {
                    if (Number(div.id[0]) > enemyTool.location.row) {
                      if (Number(div.id[0]) < myKing.location.row) {
                        openSlots(div, toolPR.color);
                      }
                    }
                  }
              }
            }
            if (enemyTool.location.row == myKing.location.row) {
              if (Number(div.id[0]) == myKing.location.row) {
                 if (myKing.location.col < enemyTool.location.col) {
                   if (Number(div.id[1]) < enemyTool.location.col) {
                     if (Number(div.id[1]) > myKing.location.col) {
                       openSlots(div, toolPR.color);
                     }
                   }
                 }
                if (myKing.location.col > enemyTool.location.col) {
                  if (Number(div.id[1]) > enemyTool.location.col) {
                    if (Number(div.id[1]) < myKing.location.col) {
                      openSlots(div, toolPR.color);
                    }
                  }
                }
              }
            }
            if (
              enemyTool.location.col - myKing.location.col ==
                enemyTool.location.row - myKing.location.row ||
              myKing.location.col - enemyTool.location.col ==
                enemyTool.location.row - myKing.location.row
            ) {
              if (
                Number(div.id[1]) - myKing.location.col ==
                  Number(div.id[0]) - myKing.location.row ||
                myKing.location.col - Number(div.id[1]) ==
                  Number(div.id[0]) - myKing.location.row
              ) {
                 if ( myKing.location.col< enemyTool.location.col) {
                   if ( Number(div.id[1]) < enemyTool.location.col  ) {
                    if (Number(div.id[1]) > myKing.location.col)
                      openSlots(div, toolPR.color);
                 }
                 }
                 if (myKing.location.col > enemyTool.location.col) {
                   if (Number(div.id[1]) > enemyTool.location.col) {
                     if (Number(div.id[1]) < myKing.location.col)
                       openSlots(div, toolPR.color);
                   }
                 }
              }
            }
          }
        }
      });
    }
  });
}

export function changeToKueen(pawnPR: GameTool) {
  let divForNewQueen = pawnPR.htmlElement.parentElement!;
  pawnPR.htmlElement.remove();
  const newQueen2 = new Queen(
    pawnPR.color,
    `${pawnPR.color}nq${pawnPR.type}`,
    `./${pawnPR.color.toLowerCase()}Q.png`
  );
  divForNewQueen.appendChild(newQueen2.htmlElement);
  divForNewQueen.appendChild(newQueen2.htmlElement);
  if (pawnPR.color == "W") {
    game.white.push(newQueen2);
  }
  if (pawnPR.color == "B") {
    game.black.push(newQueen2);
  }

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
