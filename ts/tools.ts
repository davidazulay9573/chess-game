import { King } from "./king";
import { game } from "./script.js";
export class GameTool {
  public type: string;
  private img: string;
  public color: string;
  public htmlElement: HTMLImageElement;
  public chesBoard: HTMLElement;
  public location: { row: number; col: number };
  public orderOfMovements: { row: number; col: number }[];
  public possibleSlots: number[];
  constructor(color: string, type: string, img: string) {
    this.color = color;
    this.type = type;
    this.img = img;
    this.orderOfMovements = [];
    this.possibleSlots = [];
    this.htmlElement = document.createElement("img");
    this.chesBoard = document.querySelector("#chessboard")!;
    this.location = {
      row: Number(this.htmlElement.id[0]),
      col: Number(this.htmlElement.id[1]),
    };
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
  private setLocation() {
    let thisChessPiece = this.chesBoard.querySelector(
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
    let divs = this.chesBoard.querySelectorAll("div");
    divs.forEach((div) => {
      div.removeAttribute("ondrop");
      div.removeAttribute("ondragover");
      div.removeAttribute("data-toggle");
    });

    this.setLocation();
  }
  checkIfMovingAllowed() {
    if (this.color == "W") {
      let KingPossibleSlots = game.white.filter((tool) => {
        return tool.type == "Wking";
      })[0];

      game.black.forEach((blackTool) => {
        if (
          blackTool.possibleSlots.includes(
            Number(KingPossibleSlots.htmlElement.parentElement!.id)
          )
        ) {
          let divs = this.chesBoard.querySelectorAll("div");
          divs.forEach((div) => {
            if (
              Number(blackTool.htmlElement.parentElement!.id) == Number(div.id)
            ) {
            } else {
              if (
                KingPossibleSlots.possibleSlots.includes(Number(div.id)) &&
                blackTool.possibleSlots.includes(Number(div.id))
              ) {
              } else {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            }
          });
        }
      });
    }
    if (this.color == "B") {
      let KingPossibleSlots = game.black.filter((tool) => {
        return tool.type == "Bking";
      })[0];

      game.white.forEach((whiteTool) => {
        if (
          whiteTool.possibleSlots.includes(
            Number(KingPossibleSlots.htmlElement.parentElement!.id)
          )
        ) {
          let divs = this.chesBoard.querySelectorAll("div");
          divs.forEach((div) => {
            if (
              Number(whiteTool.htmlElement.parentElement!.id) == Number(div.id)
            ) {
            } else {
              if (
                KingPossibleSlots.possibleSlots.includes(Number(div.id)) &&
                whiteTool.possibleSlots.includes(Number(div.id))
              ) {
              } else {
                div.removeAttribute("ondrop");
                div.removeAttribute("ondragover");
                div.removeAttribute("data-toggle");
              }
            }
          });
        }
      });
    }
  }
}
