export class GameTool {
    constructor(color, type, img) {
        this.color = color;
        this.type = type;
        this.img = img;
        this.location = { row: 1, col: 1 };
        this.orderOfMovements = [];
        this.htmlElement = document.createElement("img");
        this.chesBoard = document.querySelector("#chessboard");
        this.renderHTML();
    }
    renderHTML() {
        this.htmlElement.setAttribute("src", this.img);
        this.htmlElement.setAttribute("draggable", "true");
        this.htmlElement.setAttribute("id", this.type);
        this.htmlElement.setAttribute("ondragstart", "drag(event)");
        this.htmlElement.setAttribute("grup", this.color);
    }
    setLocation() {
        let thisChessPiece = this.chesBoard.querySelector(`img#${this.htmlElement.id}`);
        if (thisChessPiece) {
            let div = thisChessPiece.parentElement;
            if (this.location.row != Number(div.id[0]) ||
                this.location.col != Number(div.id[1])) {
                this.location.row = Number(div.id[0]);
                this.location.col = Number(div.id[1]);
                this.orderOfMovements.push({
                    row: Number(div.id[0]),
                    col: Number(div.id[1]),
                });
            }
        }
    }
    setsOfMovs() { }
    Initialize() {
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            div.removeAttribute("ondrop");
            div.removeAttribute("ondragover");
            div.removeAttribute("data-toggle");
        });
        this.setLocation();
        this.setsOfMovs();
    }
}
