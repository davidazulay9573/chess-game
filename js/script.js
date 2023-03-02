import { Chessboard } from "./board.js";
import { Game } from "./game.js";
const container = document.getElementById("chessboard");
const chesBord = new Chessboard(container);
const game = new Game();
game.createTools();
