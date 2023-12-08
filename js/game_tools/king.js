import { GameTool } from "./gameTool.js";
import { openSlots, onlyClosSlots } from "../actions/closeAndOpenSlots.js";
import { castling } from "../actions/castling.js";
export class King extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        const divs = document.getElementById("chessboard").querySelectorAll("div");
        divs.forEach((div) => {
            if (this.location.row == Number(div.id[0]) ||
                this.location.row == Number(div.id[0]) + 1 ||
                this.location.row == Number(div.id[0]) - 1) {
                if (this.location.col == Number(div.id[1]) ||
                    this.location.col == Number(div.id[1]) + 1 ||
                    this.location.col == Number(div.id[1]) - 1) {
                    this.possibleSlots.push(Number(div.id));
                    openSlots(div, this.color);
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
            const rooks = this.friendsToFight.filter((tool) => tool.type[1] == "r");
            castling(div, this, rooks);
            this.enemies.forEach((tool) => {
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
            this.possibleSlots = this.possibleSlots.filter((location) => {
                return location != Number(`${this.location.row}${this.location.col}`);
            });
        });
    }
}
