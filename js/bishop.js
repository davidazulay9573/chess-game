import { openSlots } from "./script.js";
import { skipLimitDiagonal } from "./skipLimitDiagonal.js";
import { GameTool } from "./tools.js";
export class Bishop extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.location.row - Number(div.id[0]) ==
                this.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.location.row ==
                    this.location.col - Number(div.id[1]));
        });
        filterDivs.forEach((div) => {
            this.possibleSlots.push(Number(div.id));
            openSlots(div, this.color);
        });
        skipLimitDiagonal(this);
        this.checkIfMovingAllowed();
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
    }
}
