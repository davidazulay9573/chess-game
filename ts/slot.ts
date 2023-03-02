export class Slot {
  public element: HTMLDivElement;
  public row: number;
  public col: number;
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.element = document.createElement("div");
    this.renderHTML();
  }
  private renderHTML(): void {
    this.element.className = "slot";
    this.element.id = `${this.col}${this.row}`;
    if ((this.row + this.col) % 2 != 0) {
      this.element.classList.add("black");
    }
  }
}
