import { Game } from "./game.js";
import { Queen } from "./queen.js";
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
        if (enemyTool.possibleSlots.includes(Number(myKing.htmlElement.parentElement.id))) {
            let divs = toolPR.chesBoard.querySelectorAll("div");
            divs.forEach((div) => {
                if (Number(enemyTool.htmlElement.parentElement.id) == Number(div.id)) {
                }
                else {
                    div.removeAttribute("ondrop");
                    div.removeAttribute("ondragover");
                    div.removeAttribute("data-toggle");
                    if (enemyTool.possibleSlots.includes(Number(div.id)) &&
                        toolPR.possibleSlots.includes(Number(div.id))) {
                        if (enemyTool.location.col == myKing.location.col) {
                            if (Number(div.id[1]) == myKing.location.col) {
                                if (enemyTool.location.row > myKing.location.row) {
                                    if (enemyTool.location.row > Number(div.id[0])) {
                                        openSlots(div, toolPR.color);
                                    }
                                }
                                if (enemyTool.location.row < myKing.location.row) {
                                    if (enemyTool.location.row < Number(div.id[0])) {
                                        openSlots(div, toolPR.color);
                                    }
                                }
                            }
                        }
                        if (enemyTool.location.row == myKing.location.row) {
                            if (Number(div.id[0]) == myKing.location.row) {
                                if (enemyTool.location.col > myKing.location.col) {
                                    if (enemyTool.location.col > Number(div.id[1])) {
                                        openSlots(div, toolPR.color);
                                    }
                                }
                                if (enemyTool.location.col < myKing.location.col) {
                                    if (enemyTool.location.col < Number(div.id[1])) {
                                        openSlots(div, toolPR.color);
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
                                if (enemyTool.location.row > myKing.location.row) {
                                    if (enemyTool.location.row > Number(div.id[0])) {
                                        openSlots(div, toolPR.color);
                                    }
                                }
                                if (enemyTool.location.row < myKing.location.row) {
                                    if (enemyTool.location.row < Number(div.id[0])) {
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
export function changeToKueen(pawnPR) {
    let divForNewQueen = pawnPR.htmlElement.parentElement;
    pawnPR.htmlElement.remove();
    const newQueen2 = new Queen(pawnPR.color, `${pawnPR.color}nq${pawnPR.type}`, `./${pawnPR.color.toLowerCase()}Q.png`);
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
