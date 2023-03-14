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
