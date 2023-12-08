import { GameTool } from "./gameTool.js";
import { openSlots } from "../actions/closeAndOpenSlots.js";
import { skipLimitStrat } from "../rules/skipLimitStrate.js";
export class Rook extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        const divs = document.getElementById("chessboard").querySelectorAll("div");
        const divsCanMove = Array.from(divs).filter((div) => {
            return (this.location.col == Number(div.id[1]) ||
                this.location.row == Number(div.id[0]));
        });
        divsCanMove.forEach((div) => {
            this.possibleSlots.push(Number(div.id));
            openSlots(div, this.color);
        });
        skipLimitStrat(this);
        this.checkIfMovingAllowed();
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
    }
}
