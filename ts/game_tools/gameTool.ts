import { game } from "../script.js";
import { checkMovingAllowed } from "../rules/checkMovingAllowed.js";
import { stratDetention } from "../rules/dententionStrate.js";
import { diagonalDetention } from "../rules/dententionDiagonal.js";

export class GameTool {
  public type: string;
  private img: string;
  public color: string;
  public htmlElement: HTMLImageElement;
  public location: { row: number; col: number };
  public orderOfMovements: ({ row: number; col: number } | string)[];
  public possibleSlots: number[];
  public posibleToEat: number[];
  public enemies: GameTool[];
  public friendsToFight:GameTool[];
  
  constructor(color: string, type: string, img: string,enemies:GameTool[] ,friendsToFight:GameTool[]) {
    this.color = color;
    this.type = type;
    this.img = img;
    this.orderOfMovements = [];
    this.possibleSlots = [];
    this.posibleToEat = [];
    this.htmlElement = document.createElement("img");
    this.location = {
      row: Number(this.htmlElement.id[0]),
      col: Number(this.htmlElement.id[1]),
    };
    this.enemies = enemies;
    this.friendsToFight = friendsToFight;
    this.renderHTML();
  }
  private renderHTML(): void {
    this.htmlElement.setAttribute("src", this.img);
    this.htmlElement.setAttribute("draggable", "true");
    this.htmlElement.setAttribute("id", this.type);
    this.htmlElement.setAttribute("ondragstart", "drag(event)");
    this.htmlElement.setAttribute("grup", this.color);
    this.htmlElement.setAttribute("data-values", JSON.stringify([]));
  }
  public setLocation() {
    let thisChessPiece =  document.getElementById("chessboard")!.querySelector(
      `img#${this.htmlElement.id}`
    );
    if (thisChessPiece) {
      let div = thisChessPiece.parentElement!;
      if (
        this.location.row != Number(div.id[0]) ||
        this.location.col != Number(div.id[1])
      ) {
        this.location.row = Number(div.id[0]);
        this.location.col = Number(div.id[1]);
        this.orderOfMovements.push({
          row: Number(div.id[0]),
          col: Number(div.id[1]),
        });
      }
    }
  }
  public setsOfMovs() {}
  public Initialize() {
   const divs = document.getElementById("chessboard")!.querySelectorAll("div");
    divs.forEach((div) => {
      div.removeAttribute("ondrop");
      div.removeAttribute("ondragover");
      div.removeAttribute("data-toggle");
    });
    
    this.setLocation();
  }

  checkIfMovingAllowed() {
    if (this.color == "W") {
      checkMovingAllowed(this, game.black, game.white);
    }
    if (this.color == "B") {
      checkMovingAllowed(this, game.white, game.black);
    }
  }
}
