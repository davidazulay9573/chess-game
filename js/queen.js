import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Queen extends GameTool {
    setsOfMovs() {
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            if (this.location.row == Number(div.id[0]) ||
                this.location.col == Number(div.id[1]) ||
                this.location.row - Number(div.id[0]) ==
                    this.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.location.row ==
                    this.location.col - Number(div.id[1])) {
                div.setAttribute("ondrop", "drop(event)");
                div.setAttribute("ondragover", "allowDrop(event)");
                // div.classList.add("soltsCanMov");
            }
        });
        let skip = new Skipping(this.location);
        skip.skipLimitStrat();
        skip.skipLimitDiagonal();
    }
}
