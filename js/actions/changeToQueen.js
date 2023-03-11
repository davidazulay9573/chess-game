import { Queen } from "../game_tools/queen.js";
import { game } from "../script.js";
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
