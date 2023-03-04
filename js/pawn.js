import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Pawn extends GameTool {
    constructor(color, type, img) {
        super(color, type, img);
        {
            this.startPoint;
        }
    }
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.startPoint == 2) {
                if (this.location.row == 2) {
                    if (this.location.row == Number(div.id[0]) - 2 &&
                        this.location.col == Number(div.id[1])) {
                        if (!div.querySelector("img")) {
                            div.setAttribute("ondrop", "drop(event)");
                            div.setAttribute("ondragover", "allowDrop(event)");
                            if (!div.querySelector("img") ||
                                ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
                                div.setAttribute("data-toggle", "canMove");
                            }
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) &&
                    this.location.row == Number(div.id[0]) - 1) {
                    if (!div.querySelector("img")) {
                        div.setAttribute("ondrop", "drop(event)");
                        div.setAttribute("ondragover", "allowDrop(event)");
                        if (!div.querySelector("img") ||
                            ((_b = div.querySelector("img")) === null || _b === void 0 ? void 0 : _b.id[0]) != this.color) {
                            div.setAttribute("data-toggle", "canMove");
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) - 1 ||
                    this.location.col == Number(div.id[1]) + 1) {
                    if (this.location.row == Number(div.id[0]) - 1) {
                        this.possibleSlots.push(Number(div.id));
                        if (div.querySelector("img")) {
                            div.setAttribute("ondrop", "drop(event)");
                            div.setAttribute("ondragover", "allowDrop(event)");
                            if (!div.querySelector("img") ||
                                ((_c = div.querySelector("img")) === null || _c === void 0 ? void 0 : _c.id[0]) != this.color) {
                                div.setAttribute("data-toggle", "canMove");
                                console.log(this.possibleSlots);
                                if (((_d = div.querySelector("img")) === null || _d === void 0 ? void 0 : _d.id[1]) == "k") {
                                    div.setAttribute("data-toggle", "shach");
                                }
                            }
                        }
                    }
                }
            }
            if (this.startPoint == 7) {
                if (this.location.row == 7) {
                    if (this.location.row == Number(div.id[0]) + 2 &&
                        this.location.col == Number(div.id[1])) {
                        if (!div.querySelector("img")) {
                            div.setAttribute("ondrop", "drop(event)");
                            div.setAttribute("ondragover", "allowDrop(event)");
                            if (!div.querySelector("img") ||
                                ((_e = div.querySelector("img")) === null || _e === void 0 ? void 0 : _e.id[0]) != this.color) {
                                div.setAttribute("data-toggle", "canMove");
                            }
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) &&
                    this.location.row == Number(div.id[0]) + 1) {
                    if (!div.querySelector("img")) {
                        div.setAttribute("ondrop", "drop(event)");
                        div.setAttribute("ondragover", "allowDrop(event)");
                        if (!div.querySelector("img") ||
                            ((_f = div.querySelector("img")) === null || _f === void 0 ? void 0 : _f.id[0]) != this.color) {
                            div.setAttribute("data-toggle", "canMove");
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) - 1 ||
                    this.location.col == Number(div.id[1]) + 1) {
                    if (this.location.row == Number(div.id[0]) + 1) {
                        this.possibleSlots.push(Number(div.id));
                        if (div.querySelector("img")) {
                            div.setAttribute("ondrop", "drop(event)");
                            div.setAttribute("ondragover", "allowDrop(event)");
                            if (!div.querySelector("img") ||
                                ((_g = div.querySelector("img")) === null || _g === void 0 ? void 0 : _g.id[0]) != this.color) {
                                div.setAttribute("data-toggle", "canMove");
                                if (((_h = div.querySelector("img")) === null || _h === void 0 ? void 0 : _h.id[1]) == "k") {
                                    div.setAttribute("data-toggle", "shach");
                                }
                            }
                        }
                    }
                }
            }
        });
        new Skipping(this).skipLimitStrat();
    }
}
