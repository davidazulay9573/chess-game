import { Rook } from "./game_tools/rook.js";
import { Bishop } from "./game_tools/bishop.js";
import { Queen } from "./game_tools/queen.js";
import { Knight } from "./game_tools/knight.js";
import { King } from "./game_tools/king.js";
import { Pawn } from "./game_tools/pawn.js";
import { Chessboard } from "./ches_bord/board.js";
import { stratDetention } from "./rules/dententionStrate.js";
import { diagonalDetention } from './rules/dententionDiagonal.js';
export class Game {
    constructor(container) {
        this.black = [];
        this.white = [];
        this.whoIsStart = Math.random() < 0.5 ? 2 : 7;
        this.container = container;
        this.chesBoard = new Chessboard(container);
        this.stste = "w";
        this.stepsList = [];
    }
    createTools() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const QueenW = new Queen("W", "Wqueen", "./img/wQ.png", this.black, this.white);
        const QueenB = new Queen("B", "Bqueen", "./img/bQ.png", this.white, this.black);
        const rookW1 = new Rook("W", `Wrook1`, "./img/wR.png", this.black, this.white);
        const rookW2 = new Rook("W", `Wrook2`, "./img/wR.png", this.black, this.white);
        const rookB1 = new Rook("B", `Brook1`, "./img/bR.png", this.white, this.black);
        const rookB2 = new Rook("B", `Brook2`, "./img/bR.png", this.white, this.black);
        const bishopW1 = new Bishop("W", `Wbishop1`, "./img/wB.png", this.black, this.white);
        const bishopW2 = new Bishop("W", `Wbishop2`, "./img/wB.png", this.black, this.white);
        const bishopB1 = new Bishop("B", `Bbishop1`, "./img/bB.png", this.white, this.black);
        const bishopB2 = new Bishop("B", `Bbishop2`, "./img/bB.png", this.white, this.black);
        const knightW1 = new Knight("W", `Wnight1`, "./img/wN.png", this.black, this.white);
        const knightW2 = new Knight("W", `Wnight2`, "./img/wN.png", this.black, this.white);
        const knightB1 = new Knight("B", `Bnight1`, "./img/bN.png", this.white, this.black);
        const knightB2 = new Knight("B", `Bnight2`, "./img/bN.png", this.white, this.black);
        for (let i = 1; i <= 8; i++) {
            let pawnW = new Pawn("W", `Wpawn${i}`, "./img/wP.png", this.black, this.white);
            let pawnB = new Pawn("B", `Bpawn${i}`, "./img/bP.png", this.white, this.black);
            pawnB.startPoint = 2;
            pawnW.startPoint = 7;
            this.white.push(pawnW);
            this.black.push(pawnB);
            (_a = document.getElementById(`7${i}`)) === null || _a === void 0 ? void 0 : _a.appendChild(pawnW.htmlElement);
            (_b = document.getElementById(`2${i}`)) === null || _b === void 0 ? void 0 : _b.appendChild(pawnB.htmlElement);
        }
        (_c = document.getElementById("84")) === null || _c === void 0 ? void 0 : _c.appendChild(QueenW.htmlElement);
        (_d = document.getElementById("14")) === null || _d === void 0 ? void 0 : _d.appendChild(QueenB.htmlElement);
        (_e = document.getElementById("88")) === null || _e === void 0 ? void 0 : _e.appendChild(rookW1.htmlElement);
        (_f = document.getElementById("81")) === null || _f === void 0 ? void 0 : _f.appendChild(rookW2.htmlElement);
        (_g = document.getElementById("18")) === null || _g === void 0 ? void 0 : _g.appendChild(rookB1.htmlElement);
        (_h = document.getElementById("11")) === null || _h === void 0 ? void 0 : _h.appendChild(rookB2.htmlElement);
        (_j = document.getElementById("87")) === null || _j === void 0 ? void 0 : _j.appendChild(knightW1.htmlElement);
        (_k = document.getElementById("82")) === null || _k === void 0 ? void 0 : _k.appendChild(knightW2.htmlElement);
        (_l = document.getElementById("17")) === null || _l === void 0 ? void 0 : _l.appendChild(knightB1.htmlElement);
        (_m = document.getElementById("12")) === null || _m === void 0 ? void 0 : _m.appendChild(knightB2.htmlElement);
        (_o = document.getElementById("83")) === null || _o === void 0 ? void 0 : _o.appendChild(bishopW1.htmlElement);
        (_p = document.getElementById("86")) === null || _p === void 0 ? void 0 : _p.appendChild(bishopW2.htmlElement);
        (_q = document.getElementById("13")) === null || _q === void 0 ? void 0 : _q.appendChild(bishopB1.htmlElement);
        (_r = document.getElementById("16")) === null || _r === void 0 ? void 0 : _r.appendChild(bishopB2.htmlElement);
        this.white.push(rookW1, bishopW1, knightW1);
        this.white.push(rookW2, bishopW2, knightW2);
        this.black.push(rookB1, bishopB1, knightB1);
        this.black.push(rookB2, bishopB2, knightB2);
        const kingW = new King("W", "Wking", "./img/wK.png", this.black, this.white);
        this.white.push(QueenW, kingW);
        const kingB = new King("B", "Bking", "./img/bK.png", this.white, this.black);
        this.black.push(QueenB, kingB);
        (_s = document.getElementById("85")) === null || _s === void 0 ? void 0 : _s.appendChild(kingW.htmlElement);
        (_t = document.getElementById("15")) === null || _t === void 0 ? void 0 : _t.appendChild(kingB.htmlElement);
        this.startGame(kingW, kingB);
    }
    startGame(kingW, kingB) {
        this.white.forEach((tool) => {
            tool.htmlElement.addEventListener("dragend", () => {
                tool.Initialize();
                tool.setsOfMovs();
                this.stste = "b";
                this.stepsList.push(tool);
                tool.checkIfMovingAllowed();
                this.black.forEach((tool2) => {
                    tool2.setsOfMovs();
                    tool2.Initialize();
                    tool2.checkIfMovingAllowed();
                });
                this.white.forEach((tool2) => {
                    tool2.setsOfMovs();
                    tool2.Initialize();
                    tool2.checkIfMovingAllowed();
                });
            });
        });
        this.black.forEach((tool) => {
            tool.htmlElement.addEventListener("dragend", () => {
                tool.Initialize();
                tool.setsOfMovs();
                this.stste = "w";
                this.stepsList.push(tool);
                tool.checkIfMovingAllowed();
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
            });
        });
    }
}
