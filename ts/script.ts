import { Game } from "./game.js";
const container = document.getElementById("chessboard") as HTMLDivElement;

export const game = new Game(container);
game.createTools();

