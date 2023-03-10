import { GameTool } from "./tools.js";
import { openSlots } from "./script.js";
import { skipLimitStrat } from "./skipLimitStrate.js";
import { skipLimitDiagonal } from "./skipLimitDiagonal.js";
export class Queen extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        let divsCanMove = Array.from(divs).filter((div) => {
            return (this.location.row == Number(div.id[0]) ||
                this.location.col == Number(div.id[1]) ||
                this.location.row - Number(div.id[0]) ==
                    this.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.location.row ==
                    this.location.col - Number(div.id[1]));
        });
        divsCanMove.forEach((div) => {
            this.possibleSlots.push(Number(div.id));
            openSlots(div, this.color);
        });
        this.checkIfMovingAllowed();
        skipLimitStrat(this);
        skipLimitDiagonal(this);
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
    }
}
