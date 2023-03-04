import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Rook extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        let divsCanMove = Array.from(divs).filter((div) => {
            return (this.location.col == Number(div.id[1]) ||
                this.location.row == Number(div.id[0]));
        });
        divsCanMove.forEach((div) => {
            var _a;
            this.possibleSlots.push(Number(div.id));
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            this.update();
            if (!div.querySelector("img") ||
                ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
            }
        });
        new Skipping(this).skipLimitStrat();
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(this.htmlElement.parentElement.id);
        });
    }
}
