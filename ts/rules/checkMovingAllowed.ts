import { GameTool } from "../game_tools/gameTool.js";
import { openSlots, onlyClosSlots } from "../actions/closeAndOpenSlots.js";


export function checkMovingAllowed(
  toolPR: GameTool,
  enemies: GameTool[],
  friendsToFight: GameTool[]
){
  let myKing = friendsToFight.filter((tool) => {
    return tool.type[1] == "k";
  })[0];

  enemies.forEach((enemyTool) => {
    if (
      enemyTool.possibleSlots.includes(
        Number(`${myKing.location.row}${myKing.location.col}`)
      ) ||
      enemyTool.posibleToEat.includes(
        Number(`${myKing.location.row}${myKing.location.col}`)
      )
    ) {
    const divs = document.getElementById("chessboard")!.querySelectorAll("div");
      
      divs.forEach((div) => {
        if (
          Number(`${enemyTool.location.row}${enemyTool.location.col}`) ==
          Number(div.id)
        ) {
        } else {
          onlyClosSlots(div, toolPR);

          if (
            enemyTool.possibleSlots.includes(Number(div.id)) &&
            toolPR.possibleSlots.includes(Number(div.id))
          ) {
            checkByStrateByCol(toolPR, enemyTool, myKing, div);
            checkByStrateByRow(toolPR, enemyTool, myKing, div);
            checkByDiagonal(toolPR, enemyTool, myKing, div);
          }
        }
      });
    }
  });
}
function checkByStrateByCol(
  toolPR: GameTool,
  enemyTool: GameTool,
  myKing: GameTool,
  div: HTMLElement
) {
  if (enemyTool.location.col == myKing.location.col) {
    if (Number(div.id[1]) == myKing.location.col) {
      if (myKing.location.row < enemyTool.location.row) {
        if (Number(div.id[0]) < enemyTool.location.row) {
          if (Number(div.id[0]) > myKing.location.row) {
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
}

function checkByStrateByRow(
  toolPR: GameTool,
  enemyTool: GameTool,
  myKing: GameTool,
  div: HTMLElement
) {
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
}

function checkByDiagonal(
  toolPR: GameTool,
  enemyTool: GameTool,
  myKing: GameTool,
  div: HTMLElement
) {
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
      if (myKing.location.col < enemyTool.location.col) {
        if (Number(div.id[1]) < enemyTool.location.col) {
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


