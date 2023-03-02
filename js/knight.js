import { GameTool } from "./tools.js";
export class Knight extends GameTool {
    setsOfMovs() {
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            if (this.location.row - Number(div.id[0]) == 7 ||
                this.location.row - Number(div.id[0]) == 1 ||
                Number(div.id[0]) - this.location.row == 7 ||
                Number(div.id[0]) - this.location.row == 1) {
                if (this.location.col - Number(div.id[1]) == 6 ||
                    this.location.col - Number(div.id[1]) == 2 ||
                    Number(div.id[1]) - this.location.col == 6 ||
                    Number(div.id[1]) - this.location.col == 2) {
                    div.setAttribute("ondrop", "drop(event)");
                    div.setAttribute("ondragover", "allowDrop(event)");
                    if (!div.querySelector("img")) {
                        div.setAttribute("data-toggle", "canMove");
                    }
                }
            }
            if (this.location.row - Number(div.id[0]) == 6 ||
                this.location.row - Number(div.id[0]) == 2 ||
                Number(div.id[0]) - this.location.row == 6 ||
                Number(div.id[0]) - this.location.row == 2) {
                if (this.location.col - Number(div.id[1]) == 7 ||
                    this.location.col - Number(div.id[1]) == 1 ||
                    Number(div.id[1]) - this.location.col == 7 ||
                    Number(div.id[1]) - this.location.col == 1) {
                    div.setAttribute("ondrop", "drop(event)");
                    div.setAttribute("ondragover", "allowDrop(event)");
                    if (!div.querySelector("img")) {
                        div.setAttribute("data-toggle", "canMove");
                    }
                }
            }
        });
    }
}
