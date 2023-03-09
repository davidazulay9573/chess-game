import { Rook } from "./rook.js";
import { Bishop } from "./bishop.js";
import { Queen } from "./queen.js";
import { Knight } from "./knight.js";
import { King } from "./king.js";
import { Pawn } from "./pawn.js";
import { GameTool } from "./tools.js";

import { Chessboard } from "./board.js";
import { diagonalDetention, stratDetention } from "./dentention.js";
export class Game {
  black: GameTool[];
  white: GameTool[];
  whoIsStart: number;
  container: HTMLDivElement;
  chesBoard: Chessboard;
  stste: string;
  stepsList :GameTool[];
  constructor(container: HTMLDivElement) {
    this.black = [];
    this.white = [];
    this.whoIsStart = Math.random() < 0.5 ? 2 : 7;
    this.container = container;
    this.chesBoard = new Chessboard(container);
    this.stste = "w";
    this.stepsList = [];
  }

  createTools() {
    const QueenW = new Queen("W", "Wqueen", "./wQ.png");
    const QueenB = new Queen("B", "Bqueen", "./bQ.png");
    const rookW1 = new Rook("W", `Wrook1`, "./wR.png");
    const rookW2 = new Rook("W", `Wrook2`, "./wR.png");
    const rookB1 = new Rook("B", `Brook1`, "./bR.png");
    const rookB2 = new Rook("B", `Brook2`, "./bR.png");
    const bishopW1 = new Bishop("W", `Wbishop1`, "./wB.png");
    const bishopW2 = new Bishop("W", `Wbishop2`, "./wB.png");
    const bishopB1 = new Bishop("B", `Bbishop1`, "./bB.png");
    const bishopB2 = new Bishop("B", `Bbishop2`, "./bB.png");
    const knightW1 = new Knight("W", `Wnight1`, "./wN.png");
    const knightW2 = new Knight("W", `Wnight2`, "./wN.png");
    const knightB1 = new Knight("B", `Bnight1`, "./bN.png");
    const knightB2 = new Knight("B", `Bnight2`, "./bN.png");

    for (let i = 1; i <= 8; i++) {
      let pawnW = new Pawn("W", `Wpawn${i}`, "./wP.png", this.white);
      let pawnB = new Pawn("B", `Bpawn${i}`, "./bP.png", this.black);
      pawnB.startPoint = 2;
      pawnW.startPoint = 7;

      this.white.push(pawnW);
      this.black.push(pawnB);

      document.getElementById(`7${i}`)?.appendChild(pawnW.htmlElement);
      document.getElementById(`2${i}`)?.appendChild(pawnB.htmlElement);
    }
    document.getElementById("84")?.appendChild(QueenW.htmlElement);
    document.getElementById("14")?.appendChild(QueenB.htmlElement);
    document.getElementById("88")?.appendChild(rookW1.htmlElement);
    document.getElementById("81")?.appendChild(rookW2.htmlElement);
    document.getElementById("18")?.appendChild(rookB1.htmlElement);
    document.getElementById("11")?.appendChild(rookB2.htmlElement);
    document.getElementById("87")?.appendChild(knightW1.htmlElement);
    document.getElementById("82")?.appendChild(knightW2.htmlElement);
    document.getElementById("17")?.appendChild(knightB1.htmlElement);
    document.getElementById("12")?.appendChild(knightB2.htmlElement);
    document.getElementById("83")?.appendChild(bishopW1.htmlElement);
    document.getElementById("86")?.appendChild(bishopW2.htmlElement);
    document.getElementById("13")?.appendChild(bishopB1.htmlElement);
    document.getElementById("16")?.appendChild(bishopB2.htmlElement);

    this.white.push(rookW1, bishopW1, knightW1);
    this.white.push(rookW2, bishopW2, knightW2);

    this.black.push(rookB1, bishopB1, knightB1);
    this.black.push(rookB2, bishopB2, knightB2);

    const kingW = new King("W", "Wking", "./wK.png", this.black, this.white);
    this.white.push(QueenW, kingW);

    const kingB = new King("B", "Bking", "./bK.png", this.white, this.black);
    this.black.push(QueenB, kingB);

    document.getElementById("85")?.appendChild(kingW.htmlElement);
    document.getElementById("15")?.appendChild(kingB.htmlElement);

    this.white.forEach((tool) => {
      if (tool.type[1] != "k") {
        tool.htmlElement.addEventListener("dragend", () => {
          tool.Initialize();
          tool.setsOfMovs();
          this.stste = "b";
          this.stepsList.push(tool);
     
          this.black.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
          });
          this.white.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
          });
        });
      }
    });
    this.black.forEach((tool) => {
      if (tool.type[1] != "k") {
        tool.htmlElement.addEventListener("dragend", () => {
          tool.Initialize();
          tool.setsOfMovs();
          this.stste = "w";
       
          this.stepsList.push(tool);
          this.white.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
          this.black.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
        });
      }
    });
    this.white.forEach((tool) => {
      tool.htmlElement.addEventListener("mousedown", () => {
        tool.Initialize();
        tool.setsOfMovs();
        tool.htmlElement.setAttribute("ondragstart", "drag(event)");

        stratDetention(tool, kingW, this.black);
        diagonalDetention(tool, kingW, this.black);
      });
    });
    this.black.forEach((tool) => {
      tool.htmlElement.addEventListener("mousedown", () => {
        tool.Initialize();
        tool.setsOfMovs();
        tool.htmlElement.setAttribute("ondragstart", "drag(event)");

        stratDetention(tool, kingB, this.white);

        diagonalDetention(tool, kingB, this.white);

        // diagonalDetention(tool, kingB, this.white);
      });
    });
  }
}
