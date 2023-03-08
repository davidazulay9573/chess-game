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
export function checkMovingAllowed(toolPR, enemies, friendsToFight) {
    let myKing = friendsToFight.filter((tool) => {
        return tool.type[1] == "k";
    })[0];
    enemies.forEach((tool) => {
        if (tool.possibleSlots.includes(Number(myKing.htmlElement.parentElement.id))) {
            let divs = toolPR.chesBoard.querySelectorAll("div");
            divs.forEach((div) => {
                if (Number(tool.htmlElement.parentElement.id) == Number(div.id)) {
                }
                else {
                    if (myKing.possibleSlots.includes(Number(div.id)) &&
                        tool.possibleSlots.includes(Number(div.id))) {
                    }
                    else {
                        div.removeAttribute("ondrop");
                        div.removeAttribute("ondragover");
                        div.removeAttribute("data-toggle");
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
