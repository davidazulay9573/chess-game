import { game, openSlots } from "../script.js";
export function castling(div, king) {
    var _a;
    if (king.location.row == Number(div.id[0])) {
        if (king.location.col == Number(div.id[1]) - 2) {
            if (king.orderOfMovements.length == 1) {
                openSlots(div, king.color);
            }
            king.htmlElement.addEventListener("dragend", () => {
                var _a, _b;
                if (king.orderOfMovements.length == 1) {
                    let tool = (_a = document
                        .getElementById(`${king.location.row}7`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                    if (tool) {
                        if (tool.id[1] == "k") {
                            let rookOldLocation = document.getElementById(`${king.location.row}8`);
                            let rookfor = rookOldLocation.querySelector("img");
                            if (rookfor) {
                                rookOldLocation.removeChild(rookfor);
                                (_b = document
                                    .getElementById(`${king.location.row}6`)) === null || _b === void 0 ? void 0 : _b.appendChild(rookfor);
                            }
                        }
                    }
                }
                king.setsOfMovs();
                king.Initialize();
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
            });
        }
        else {
            if (king.location.col == Number(div.id[1]) + 2) {
                if (((_a = document.getElementById(`${king.location.row}2`)) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
                    if (king.orderOfMovements.length == 1) {
                        openSlots(div, king.color);
                    }
                    king.htmlElement.addEventListener("dragend", () => {
                        var _a, _b;
                        if (king.orderOfMovements.length == 1) {
                            let tool = (_a = document
                                .getElementById(`${king.location.row}3`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                            if (tool) {
                                if (tool.id[1] == "k") {
                                    let rookOldLocation = document.getElementById(`${king.location.row}1`);
                                    let rookfor = rookOldLocation.querySelector("img");
                                    if (rookfor) {
                                        rookOldLocation.removeChild(rookfor);
                                        (_b = document
                                            .getElementById(`${king.location.row}4`)) === null || _b === void 0 ? void 0 : _b.appendChild(rookfor);
                                    }
                                }
                            }
                        }
                        king.setsOfMovs();
                        king.Initialize();
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
                    });
                }
            }
        }
    }
}
