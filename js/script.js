import { Game } from "./game.js";
const container = document.getElementById("chessboard");
export const game = new Game(container);
game.createTools();
export function openSlots(slotPR, color) {
    var _a;
    slotPR.setAttribute("ondrop", "drop(event)");
    slotPR.setAttribute("ondragover", "allowDrop(event)");
    if (!slotPR.querySelector("img") ||
        ((_a = slotPR.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != color) {
        slotPR.setAttribute("data-toggle", "canMove");
    }
}
export function closSlots(slotPR, toolPR) {
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
export function onlyClosSlots(slotPR, toolPR) {
    slotPR.removeAttribute("ondrop");
    slotPR.removeAttribute("ondragover");
    slotPR.removeAttribute("data-toggle");
}
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
                }
            });
        }
    });
}
