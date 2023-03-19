import { Slot } from "./slot.js";
export class Chessboard {
  public slots: Slot[] = [];
  private container: HTMLDivElement;
  constructor(container: HTMLDivElement) {
    this.container = container;
    for (let row = 1; row <= 8; row++) {
      let newDiv = document.createElement("div");
      for (let col = 1; col <= 8; col++) {
        const slot = new Slot(row, col);
        newDiv.appendChild(slot.htmlElement);
        this.slots.push(slot);
      }
      container.appendChild(newDiv);
    }
  }
}
