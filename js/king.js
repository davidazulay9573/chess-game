import { GameTool } from "./tools.js";
import { Skipping } from "./skipping.js";
import { game, onlyClosSlots } from "./script.js";
export class King extends GameTool {
    constructor(color, type, img, opponentsTools, friendsToFight) {
        super(color, type, img);
        {
            this.enemies = opponentsTools;
            this.friendsToFight = friendsToFight;
        }
    }
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            var _a;
            if (this.location.row == Number(div.id[0]) ||
                this.location.row == Number(div.id[0]) + 1 ||
                this.location.row == Number(div.id[0]) - 1) {
                if (this.location.col == Number(div.id[1]) ||
                    this.location.col == Number(div.id[1]) + 1 ||
                    this.location.col == Number(div.id[1]) - 1) {
                    this.possibleSlots.push(Number(div.id));
                    div.setAttribute("ondrop", "drop(event)");
                    div.setAttribute("ondragover", "allowDrop(event)");
                    if (!div.querySelector("img") ||
                        ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.type[0]) {
                        div.setAttribute("data-toggle", "canMove");
                    }
                }
            }
            this.enemies.forEach((tool) => {
                if (!document.getElementById(tool.type)) {
                    tool.possibleSlots = [];
                    tool.location.row = -1;
                    tool.location.col = -1;
                }
            });
            this.friendsToFight.forEach((tool) => {
                if (!document.getElementById(tool.type)) {
                    tool.possibleSlots = [];
                    tool.location.row = -1;
                    tool.location.col = -1;
                }
            });
            let skip = new Skipping(this);
            if (this.color == "W") {
                game.black.forEach((tool) => {
                    if (tool.type[1] != "p") {
                        tool.possibleSlots.forEach((location) => {
                            if (Number(div.id) == location) {
                                onlyClosSlots(div, this);
                            }
                        });
                    }
                    else {
                        tool.posibleToEat.forEach((location) => {
                            if (Number(div.id) == location) {
                                onlyClosSlots(div, this);
                            }
                        });
                    }
                });
            }
            if (this.color == "B") {
                game.white.forEach((tool) => {
                    if (tool.type[1] != "p") {
                        tool.possibleSlots.forEach((location) => {
                            if (Number(div.id) == location) {
                                onlyClosSlots(div, this);
                            }
                        });
                    }
                    else {
                        tool.posibleToEat.forEach((location) => {
                            if (Number(div.id) == location) {
                                onlyClosSlots(div, this);
                            }
                        });
                    }
                });
            }
            skip.castling(div, this);
            this.possibleSlots = this.possibleSlots.filter((location) => {
                return location != Number(`${this.location.row}${this.location.col}`);
            });
        });
    }
}
