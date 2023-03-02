import { Skipping } from "./skipping.js";
import { GameTool } from "./tools.js";
export class Rook extends GameTool {
  setsOfMovs(): void {
    let divs = this.chesBoard.querySelectorAll("div");
    let filterDivs = Array.from(divs).filter((div) => {
      return (
        this.location.col == Number(div.id[1]) ||
        this.location.row == Number(div.id[0])
      );
    });
    filterDivs.forEach((div) => {
      div.setAttribute("ondrop", "drop(event)");
      div.setAttribute("ondragover", "allowDrop(event)");
      // div.classList.add("soltsCanMov");
    });
      new Skipping(this.location).skipLimitStrat();
    
  }
}
