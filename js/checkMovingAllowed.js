import { onlyClosSlots, openSlots } from "./script.js";
export function checkMovingAllowed(toolPR, enemies, friendsToFight) {
    let myKing = friendsToFight.filter((tool) => {
        return tool.type[1] == "k";
    })[0];
    enemies.forEach((enemyTool) => {
        if (enemyTool.possibleSlots.includes(Number(myKing.htmlElement.parentElement.id)) ||
            enemyTool.posibleToEat.includes(Number(myKing.htmlElement.parentElement.id))) {
            let divs = toolPR.chesBoard.querySelectorAll("div");
            divs.forEach((div) => {
                if (Number(enemyTool.htmlElement.parentElement.id) == Number(div.id)) {
                }
                else {
                    onlyClosSlots(div, toolPR);
                    if (enemyTool.possibleSlots.includes(Number(div.id)) &&
                        toolPR.possibleSlots.includes(Number(div.id))) {
                        checkByStrateByCol(toolPR, enemyTool, myKing, div);
                        checkByStrateByRow(toolPR, enemyTool, myKing, div);
                        checkByDiagonal(toolPR, enemyTool, myKing, div);
                    }
                }
            });
        }
    });
}
function checkByStrateByCol(toolPR, enemyTool, myKing, div) {
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
function checkByStrateByRow(toolPR, enemyTool, myKing, div) {
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
function checkByDiagonal(toolPR, enemyTool, myKing, div) {
    if (enemyTool.location.col - myKing.location.col ==
        enemyTool.location.row - myKing.location.row ||
        myKing.location.col - enemyTool.location.col ==
            enemyTool.location.row - myKing.location.row) {
        if (Number(div.id[1]) - myKing.location.col ==
            Number(div.id[0]) - myKing.location.row ||
            myKing.location.col - Number(div.id[1]) ==
                Number(div.id[0]) - myKing.location.row) {
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
