import { GameTool } from "./gameTool.js";
import { openSlots } from "../actions/closeAndOpenSlots.js";
export class Knight extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        const divs = document.getElementById("chessboard").querySelectorAll("div");
        divs.forEach((div) => {
            if (this.location.row - Number(div.id[0]) > 3 ||
                this.location.col - Number(div.id[1]) > 3 ||
                Number(div.id[0]) - this.location.row > 3 ||
                Number(div.id[1]) - this.location.col > 3) {
            }
            else {
                if (this.location.row - Number(div.id[0]) == 7 ||
                    this.location.row - Number(div.id[0]) == 1 ||
                    Number(div.id[0]) - this.location.row == 7 ||
                    Number(div.id[0]) - this.location.row == 1) {
                    if (this.location.col - Number(div.id[1]) == 6 ||
                        this.location.col - Number(div.id[1]) == 2 ||
                        Number(div.id[1]) - this.location.col == 6 ||
                        Number(div.id[1]) - this.location.col == 2) {
                        this.possibleSlots.push(Number(div.id));
                        openSlots(div, this.color);
                    }
                }
            }
            if (this.location.row - Number(div.id[0]) > 3 ||
                this.location.col - Number(div.id[1]) > 3 ||
                Number(div.id[0]) - this.location.row > 3 ||
                Number(div.id[1]) - this.location.col > 3) {
            }
            else {
                if (this.location.row - Number(div.id[0]) == 6 ||
                    this.location.row - Number(div.id[0]) == 2 ||
                    Number(div.id[0]) - this.location.row == 6 ||
                    Number(div.id[0]) - this.location.row == 2) {
                    if (this.location.col - Number(div.id[1]) == 7 ||
                        this.location.col - Number(div.id[1]) == 1 ||
                        Number(div.id[1]) - this.location.col == 7 ||
                        Number(div.id[1]) - this.location.col == 1) {
                        this.possibleSlots.push(Number(div.id));
                        openSlots(div, this.color);
                    }
                }
            }
        });
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
        this.checkIfMovingAllowed();
    }
}
