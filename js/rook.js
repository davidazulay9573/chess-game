import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Rook extends GameTool {
    setsOfMovs() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.location.col == Number(div.id[1]) ||
                this.location.row == Number(div.id[0]));
        });
        filterDivs.forEach((div) => {
            var _a;
            div.setAttribute("ondrop", "drop(event)");
            div.setAttribute("ondragover", "allowDrop(event)");
            if (!div.querySelector("img") ||
                ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
                div.setAttribute("data-toggle", "canMove");
            }
        });
        new Skipping(this.location).skipLimitStrat();
    }
}
