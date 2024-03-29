import { Queen } from "../game_tools/queen.js";
import { GameTool } from "../game_tools/gameTool.js";
import { game } from "../script.js";

export function changeToKueen(pawnPR: GameTool) {
  const divForNewQueen = pawnPR.htmlElement.parentElement!;
  const newQueen = new Queen(pawnPR.color, `${pawnPR.color}q${pawnPR.type}`,
  `./img/${pawnPR.color.toLowerCase()}Q.png`,pawnPR.enemies,pawnPR.friendsToFight);
  pawnPR.htmlElement.remove();
  divForNewQueen.appendChild(newQueen.htmlElement);
  divForNewQueen.appendChild(newQueen.htmlElement);
 
  if (pawnPR.color == "W") {
    game.white.push(newQueen);
  }
  if (pawnPR.color == "B") {
    game.black.push(newQueen);
  }

 initializeKueen(newQueen)
}
function initializeKueen(newQueen:Queen){
    newQueen.Initialize();
    newQueen.setsOfMovs();
    newQueen.htmlElement.addEventListener("mousedown", () => {
      newQueen.Initialize();
      newQueen.setsOfMovs();
    });
    newQueen.htmlElement.addEventListener("dragend", () => {
      newQueen.Initialize();
      newQueen.setsOfMovs();

      game.white.forEach((tool) => {
        tool.setsOfMovs();
        tool.Initialize();
        tool.checkIfMovingAllowed();
      });
      game.black.forEach((tool) => {
        tool.setsOfMovs();
        tool.Initialize();
        tool.checkIfMovingAllowed();
      });
    });
}
