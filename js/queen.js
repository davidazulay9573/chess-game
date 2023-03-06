import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
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
            var _a;
            this.possibleSlots.push(Number(div.id));
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            if (!div.querySelector("img") ||
                ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
                div.setAttribute("data-toggle", "canMove");
            }
        });
        this.checkIfMovingAllowed();
        let skip = new Skipping(this);
        skip.skipLimitStrat();
        skip.skipLimitDiagonal();
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
    }
}
