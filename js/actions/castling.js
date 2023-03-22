import { openSlots } from "../actions/closeAndOpenSlots.js";
export function castling(div, king, rooks) {
    if (king.location.row === Number(div.id[0])) {
        if (king.location.col === Number(div.id[1]) - 2) {
            short(king, rooks, div);
        }
        if (king.location.col === Number(div.id[1]) + 2) {
            long(king, rooks, div);
        }
    }
}
function short(king, rooks, div) {
    var _a;
    const rook = rooks.find((rook) => rook.location.col === 8);
    if (checkTheWay(king, Number(`${king.location.row}6`))) {
        if (((_a = document.getElementById(`${king.location.row}6`)) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
            if (rook) {
                if (rook.orderOfMovements.length == 1) {
                    if (king.orderOfMovements.length == 1) {
                        openSlots(div, king.color);
                    }
                }
            }
        }
    }
    king.htmlElement.addEventListener("dragend", () => {
        swichKingAndRook(king, rook, "6", "7");
    });
}
function long(king, rooks, div) {
    var _a;
    const rook = rooks.find((rook) => rook.location.col === 1);
    if (checkTheWay(king, Number(`${king.location.row}4`))) {
        if (((_a = document.getElementById(`${king.location.row}2`)) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
            if (rook) {
                if (rook.orderOfMovements.length == 1) {
                    if (king.orderOfMovements.length == 1) {
                        openSlots(div, king.color);
                    }
                }
            }
        }
    }
    king.htmlElement.addEventListener("dragend", () => {
        swichKingAndRook(king, rook, "4", "3");
    });
}
function checkTheWay(king, location) {
    for (const enemyTool of king.enemies) {
        if (enemyTool.possibleSlots.includes(location) ||
            enemyTool.possibleSlots.includes(Number(`${king.location.row}${king.location.col}`))) {
            return false;
        }
    }
    return true;
}
function swichKingAndRook(king, rook, rookNewLocation, kingNewLoction) {
    var _a, _b;
    let toolOnSlot = (_a = document.getElementById(`${king.location.row}${kingNewLoction}`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
    if (king.htmlElement) {
        if (king.htmlElement == toolOnSlot) {
            if (king.orderOfMovements.length == 2) {
                if (rook) {
                    if (rook.orderOfMovements.length == 1) {
                        (_b = document
                            .getElementById(`${king.location.row}${rookNewLocation}`)) === null || _b === void 0 ? void 0 : _b.appendChild(rook.htmlElement);
                    }
                }
            }
        }
    }
}
