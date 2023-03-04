export class Slot {
  public htmlElement: HTMLDivElement;
  public row: number;
  public col: number;
  public toolsCanGetIn1Move: string[];
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.htmlElement = document.createElement("div");
    this.toolsCanGetIn1Move = [];
    this.renderHTML();
  }
  private renderHTML(): void {
    this.htmlElement.className = "slot";
    this.htmlElement.id = `${this.col}${this.row}`;
    if ((this.row + this.col) % 2 != 0) {
      this.htmlElement.classList.add("black");
    }
  }
  whoIsAllowedIn() {
    if (!this.htmlElement.getAttribute("data-values")) {
      this.htmlElement.setAttribute("data-values", JSON.stringify([]));
    }
  }
}
