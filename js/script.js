import { Game } from "./game.js";
const container = document.getElementById("chessboard");
const game = new Game(container);
game.createTools();
// game.check();
