export class Slot {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.element = document.createElement("div");
        this.renderHTML();
    }
    renderHTML() {
        this.element.className = "slot";
        this.element.id = `${this.row}${this.col}`;
        if ((this.row + this.col) % 2 != 0) {
            this.element.classList.add("black");
        }
    }
}
