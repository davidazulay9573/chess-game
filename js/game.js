import { Rook } from "./rook.js";
import { Bishop } from "./bishop.js";
import { Queen } from "./queen.js";
import { Knight } from "./knight.js";
import { King } from "./king.js";
import { Pawn } from "./pawn.js";
export class Game {
    constructor() {
        this.black = [];
        this.white = [];
        this.whoIsStart = Math.random() < 0.5 ? 2 : 7;
    }
    createTools() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const kingW = new King("w", "Wking", "./wK.png");
        const kingB = new King("b", "Bking", "./bK.png");
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
            let pawnW = new Pawn("white", `Wpawn${i}`, "./wP.png");
            let pawnB = new Pawn("black", `Bpawn${i}`, "./bP.png");
            pawnB.startPoint = 2;
            pawnW.startPoint = 7;
            this.white.push(pawnW);
            this.black.push(pawnB);
            (_a = document.getElementById(`7${i}`)) === null || _a === void 0 ? void 0 : _a.appendChild(pawnW.htmlElement);
            (_b = document.getElementById(`2${i}`)) === null || _b === void 0 ? void 0 : _b.appendChild(pawnB.htmlElement);
        }
        (_c = document.getElementById("84")) === null || _c === void 0 ? void 0 : _c.appendChild(QueenW.htmlElement);
        (_d = document.getElementById("85")) === null || _d === void 0 ? void 0 : _d.appendChild(kingW.htmlElement);
        (_e = document.getElementById("14")) === null || _e === void 0 ? void 0 : _e.appendChild(QueenB.htmlElement);
        (_f = document.getElementById("15")) === null || _f === void 0 ? void 0 : _f.appendChild(kingB.htmlElement);
        (_g = document.getElementById("88")) === null || _g === void 0 ? void 0 : _g.appendChild(rookW1.htmlElement);
        (_h = document.getElementById("81")) === null || _h === void 0 ? void 0 : _h.appendChild(rookW2.htmlElement);
        (_j = document.getElementById("18")) === null || _j === void 0 ? void 0 : _j.appendChild(rookB1.htmlElement);
        (_k = document.getElementById("11")) === null || _k === void 0 ? void 0 : _k.appendChild(rookB2.htmlElement);
        (_l = document.getElementById("87")) === null || _l === void 0 ? void 0 : _l.appendChild(knightW1.htmlElement);
        (_m = document.getElementById("82")) === null || _m === void 0 ? void 0 : _m.appendChild(knightW2.htmlElement);
        (_o = document.getElementById("17")) === null || _o === void 0 ? void 0 : _o.appendChild(knightB1.htmlElement);
        (_p = document.getElementById("12")) === null || _p === void 0 ? void 0 : _p.appendChild(knightB2.htmlElement);
        (_q = document.getElementById("83")) === null || _q === void 0 ? void 0 : _q.appendChild(bishopW1.htmlElement);
        (_r = document.getElementById("86")) === null || _r === void 0 ? void 0 : _r.appendChild(bishopW2.htmlElement);
        (_s = document.getElementById("13")) === null || _s === void 0 ? void 0 : _s.appendChild(bishopB1.htmlElement);
        (_t = document.getElementById("16")) === null || _t === void 0 ? void 0 : _t.appendChild(bishopB2.htmlElement);
        this.white.push(QueenW, kingW);
        this.black.push(QueenB, kingB);
        this.white.push(rookW1, bishopW1, knightW1);
        this.white.push(rookW2, bishopW2, knightW2);
        this.black.push(rookB1, bishopB1, knightB1);
        this.black.push(rookB2, bishopB2, knightB2);
        this.white.forEach((tool) => {
            tool.htmlElement.addEventListener("mousedown", () => {
                tool.Initialize();
            });
        });
        this.black.forEach((tool) => {
            tool.htmlElement.addEventListener("mousedown", () => {
                tool.Initialize();
            });
        });
    }
}
