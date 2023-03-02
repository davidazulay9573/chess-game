import { GameTool } from "./tools.js";
import { Skipping } from "./skipping.js";
export class King extends GameTool {
    setsOfMovs() {
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            var _a;
            if (this.location.row == Number(div.id[0]) ||
                this.location.row == Number(div.id[0]) + 1 ||
                this.location.row == Number(div.id[0]) - 1) {
                if (this.location.col == Number(div.id[1]) ||
                    this.location.col == Number(div.id[1]) + 1 ||
                    this.location.col == Number(div.id[1]) - 1) {
                    div.setAttribute("ondrop", "drop(event)");
                    div.setAttribute("ondragover", "allowDrop(event)");
                    if (!div.querySelector("img") ||
                        ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.type[0]) {
                        div.setAttribute("data-toggle", "canMove");
                    }
                }
            }
            let skip = new Skipping(this.location);
            skip.skipLimitStrat();
            skip.castling(div, this);
        });
    }
}
