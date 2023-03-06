import { Skipping } from "./skipping.js";
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
            var _a;
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            this.possibleSlots.push(Number(div.id));
            if (!div.querySelector("img") ||
                ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
                div.setAttribute("data-toggle", "canMove");
            }
        });
        let skip = new Skipping(this);
        skip.skipLimitDiagonal();
        this.checkIfMovingAllowed();
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(`${this.location.row}${this.location.col}`);
        });
    }
}
