import { Game } from "./game.js";
const container = document.getElementById("chessboard");
export const game = new Game(container);
game.createTools();
