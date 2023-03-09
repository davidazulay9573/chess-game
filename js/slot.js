export class Slot {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.htmlElement = document.createElement("div");
        this.toolsCanGetIn1Move = [];
        this.renderHTML();
    }
    renderHTML() {
        this.htmlElement.className = "slot";
        this.htmlElement.id = `${this.col}${this.row}`;
        if ((this.row + this.col) % 2 != 0) {
            this.htmlElement.classList.add("black");
        }
    }
}
