import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
import { game, changeToKueen, openSlots, closSlots } from "./script.js";
export class Pawn extends GameTool {
    constructor(color, type, img, friendsToFight) {
        super(color, type, img);
        {
            this.friendsToFight = friendsToFight;
            this.startPoint;
        }
    }
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        if (this.startPoint == 2) {
            if (this.location.row == 8) {
                changeToKueen(this);
            }
            divs.forEach((div) => {
                if (this.location.row == 2) {
                    if (this.location.row == Number(div.id[0]) - 2 &&
                        this.location.col == Number(div.id[1])) {
                        if (!div.querySelector("img")) {
                            this.possibleSlots.push(Number(div.id));
                            openSlots(div, this.color);
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) &&
                    this.location.row == Number(div.id[0]) - 1) {
                    if (!div.querySelector("img")) {
                        this.possibleSlots.push(Number(div.id));
                        openSlots(div, this.color);
                    }
                }
                if (this.location.col == Number(div.id[1]) - 1 ||
                    this.location.col == Number(div.id[1]) + 1) {
                    if (this.location.row == Number(div.id[0]) - 1) {
                        this.posibleToEat.push(Number(div.id));
                        if (div.querySelector("img")) {
                            openSlots(div, this.color);
                        }
                    }
                    if (this.location.row == 5) {
                        let pawns = game.white.filter((pawn) => {
                            return pawn.type[1] == "p";
                        });
                        pawns.forEach((pawn) => {
                            if (this.location.row == pawn.location.row) {
                                if (this.location.col == pawn.location.col - 1 ||
                                    this.location.col == pawn.location.col + 1) {
                                    if (pawn.orderOfMovements.length == 2) {
                                        let id = this.location.row + 1 + div.id[1];
                                        let divSpashelMov = document.getElementById(id);
                                        if (Number(id[1]) == pawn.location.col) {
                                            if (game.stepsList[game.stepsList.length - 1] == pawn) {
                                                openSlots(divSpashelMov, this.color);
                                                this.htmlElement.addEventListener("dragend", () => {
                                                    if (this.location.row == Number(id[0]) &&
                                                        this.location.col == Number(id[1])) {
                                                        pawn.htmlElement.remove();
                                                    }
                                                });
                                            }
                                            else {
                                                closSlots(divSpashelMov, this);
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
        if (this.startPoint == 7) {
            if (this.location.row == 1) {
                changeToKueen(this);
            }
            divs.forEach((div) => {
                if (this.location.row == 7) {
                    if (this.location.row == Number(div.id[0]) + 2 &&
                        this.location.col == Number(div.id[1])) {
                        if (!div.querySelector("img")) {
                            this.possibleSlots.push(Number(div.id));
                            openSlots(div, this.color);
                        }
                    }
                }
                if (this.location.col == Number(div.id[1]) &&
                    this.location.row == Number(div.id[0]) + 1) {
                    if (!div.querySelector("img")) {
                        this.possibleSlots.push(Number(div.id));
                        openSlots(div, this.color);
                    }
                }
                if (this.location.col == Number(div.id[1]) - 1 ||
                    this.location.col == Number(div.id[1]) + 1) {
                    if (this.location.row == Number(div.id[0]) + 1) {
                        this.posibleToEat.push(Number(div.id));
                        if (div.querySelector("img")) {
                            openSlots(div, this.color);
                        }
                    }
                    if (this.location.row == 4) {
                        let pawns = game.black.filter((pawn) => {
                            return pawn.type[1] == "p";
                        });
                        pawns.forEach((pawn) => {
                            if (this.location.row == pawn.location.row) {
                                if (this.location.col == pawn.location.col - 1 ||
                                    this.location.col == pawn.location.col + 1) {
                                    if (pawn.orderOfMovements.length == 2) {
                                        let id = this.location.row - 1 + div.id[1];
                                        let divSpashelMov = document.getElementById(id);
                                        if (Number(id[1]) == pawn.location.col) {
                                            if (game.stepsList[game.stepsList.length - 1] == pawn) {
                                                openSlots(divSpashelMov, this.color);
                                                this.htmlElement.addEventListener("dragend", () => {
                                                    if (this.location.row == Number(id[0]) &&
                                                        this.location.col == Number(id[1])) {
                                                        pawn.htmlElement.remove();
                                                    }
                                                });
                                            }
                                            else {
                                                closSlots(divSpashelMov, this);
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
        this.checkIfMovingAllowed();
        new Skipping(this).skipLimitStrat();
    }
}
