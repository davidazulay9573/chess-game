import { openSlots, closSlots } from "./script.js";
export class Skipping {
    constructor(tool) {
        this.chesBoard = document.querySelector("#chessboard");
        this.forTool = tool;
    }
    skipLimitStrat() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.forTool.location.col == Number(div.id[1]) ||
                this.forTool.location.row == Number(div.id[0]));
        });
        filterDivs.forEach((div) => {
            let tool = div.querySelector("img");
            if (div.querySelector("img")) {
                if (Number(tool.parentElement.id[1]) == this.forTool.location.col) {
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                }
                if (Number(tool.parentElement.id[0]) == this.forTool.location.row) {
                    if (this.forTool.location.col < Number(tool.parentElement.id[1])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                    if (this.forTool.location.col > Number(tool.parentElement.id[1])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                }
            }
        });
    }
    skipLimitDiagonal() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.forTool.location.row - Number(div.id[0]) ==
                this.forTool.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.forTool.location.row ==
                    this.forTool.location.col - Number(div.id[1]));
        });
        filterDivs.forEach((div) => {
            let tool = div.querySelector("img");
            if (div.querySelector("img")) {
                if (this.forTool.location.col < Number(tool.parentElement.id[1])) {
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                }
                if (this.forTool.location.col > Number(tool.parentElement.id[1])) {
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                closSlots(div, this.forTool);
                            }
                        });
                    }
                }
            }
        });
    }
    castling(div, king) {
        var _a;
        if (king.orderOfMovements.length === 1) {
            if (this.forTool.location.row == Number(div.id[0])) {
                if (this.forTool.location.col == Number(div.id[1]) - 2) {
                    openSlots(div, king.color);
                    king.htmlElement.addEventListener("dragend", () => {
                        var _a, _b;
                        if (king.orderOfMovements.length == 1) {
                            let tool = (_a = document
                                .getElementById(`${king.location.row}7`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                            if (tool.id[1] == "k") {
                                let rookOldLocation = document.getElementById(`${this.forTool.location.row}8`);
                                let rookfor = rookOldLocation.querySelector("img");
                                rookOldLocation.removeChild(rookfor);
                                (_b = document
                                    .getElementById(`${this.forTool.location.row}6`)) === null || _b === void 0 ? void 0 : _b.appendChild(rookfor);
                            }
                        }
                        king.setsOfMovs();
                        king.Initialize();
                    });
                }
                else {
                    if (this.forTool.location.col == Number(div.id[1]) + 2) {
                        if (((_a = document.getElementById(`${this.forTool.location.row}2`)) === null || _a === void 0 ? void 0 : _a.children.length) == 0) {
                            openSlots(div, king.color);
                            king.htmlElement.addEventListener("dragend", () => {
                                var _a, _b;
                                if (king.orderOfMovements.length == 1) {
                                    let tool = (_a = document
                                        .getElementById(`${king.location.row}3`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                                    if (tool.id[1] == "k") {
                                        let rookOldLocation = document.getElementById(`${this.forTool.location.row}1`);
                                        let rookfor = rookOldLocation.querySelector("img");
                                        rookOldLocation.removeChild(rookfor);
                                        (_b = document
                                            .getElementById(`${this.forTool.location.row}4`)) === null || _b === void 0 ? void 0 : _b.appendChild(rookfor);
                                    }
                                }
                                king.setsOfMovs();
                                king.Initialize();
                            });
                        }
                    }
                }
            }
        }
    }
}
