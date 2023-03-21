import { game, openSlots } from "../script.js";
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
    if (shachcStat(king)) {
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
    }
    king.htmlElement.addEventListener("dragend", () => {
        if (king.orderOfMovements.length == 2) {
            chengKingTOrook(king, rook, "6", "7");
        }
    });
}
function long(king, rooks, div) {
    var _a;
    const rook = rooks.find((rook) => rook.location.col === 1);
    if (shachcStat(king)) {
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
    }
    king.htmlElement.addEventListener("dragend", () => {
        if (king.orderOfMovements.length == 1) {
            chengKingTOrook(king, rook, '4', '3');
        }
    });
}
function checkTheWay(king, location) {
    for (const enemyTool of king.enemies) {
        if (enemyTool.possibleSlots.includes(location)) {
            return false;
        }
    }
    return true;
}
function shachcStat(king) {
    for (const enemyTool of king.enemies) {
        if (enemyTool.possibleSlots.includes(Number(`${king.location.row}${king.location.col}`))) {
            return false;
        }
    }
    return true;
}
function chengKingTOrook(king, rook, rookNewLocation, kingNewLoction) {
    var _a, _b;
    if (rook.orderOfMovements.length == 1) {
        let tool = (_a = document
            .getElementById(`${king.location.row}${kingNewLoction}`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
        if (tool) {
            if (tool.id[1] == "k") {
                let rookOldLocation = document.getElementById(`${king.location.row}${rook.location.col}`);
                let rookfor = rookOldLocation.querySelector("img");
                if (rookfor) {
                    rookOldLocation.removeChild(rookfor);
                    (_b = document
                        .getElementById(`${king.location.row}${rookNewLocation}`)) === null || _b === void 0 ? void 0 : _b.appendChild(rookfor);
                }
            }
        }
    }
    initializeKing(king);
}
function initializeKing(king) {
    king.setsOfMovs();
    king.Initialize();
    king.checkIfMovingAllowed();
    game.stepsList.push(king);
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
}
