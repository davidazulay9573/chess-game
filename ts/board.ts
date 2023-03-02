import { Slot } from "./slot.js";
export class Chessboard {
  private container: HTMLDivElement;
  constructor(container: HTMLDivElement) {
    this.container = container;
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        const solt = new Slot(row, col);
        this.container.appendChild(solt.element);
      }
    }
  }
}
