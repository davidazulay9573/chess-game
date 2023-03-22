import { GameTool } from "../game_tools/gameTool.js";
import { closSlots, onlyClosSlots } from "../actions/closeAndOpenSlots.js";
import { game } from "../script.js";

export function stratDetention(tool:GameTool, king:GameTool, enemies:GameTool[]) {
  const divs = document.getElementById("chessboard")!.querySelectorAll("div");
  const filterBlack = game.black.filter((toolb) => {
    return toolb != tool;
  });
  let filterWhite = game.white.filter((toolw) => {
    return toolw != tool;
  });
  let filterEnemies = enemies.filter((tool) => {
    return tool.type[1] == "q" || tool.type[1] == "r";
  });
  filterEnemies.forEach((enemyTool) => {
    if (
      tool.location.row == king.location.row &&
      enemyTool.location.row == king.location.row
    ) {
      if (
        enemyTool.location.col > king.location.col &&
        tool.location.col > king.location.col
      ) {
        if (enemyTool.location.col > tool.location.col) {
          divs.forEach((div) => {
            if (Number(div.id[0]) != king.location.row) {
              closSlots(div, tool);
            }
          });
          filterBlack.forEach((blacktool) => {
            if (blacktool.location.row == king.location.row) {
              if (
                blacktool.location.col < enemyTool.location.col &&
                blacktool.location.col > king.location.col
              ) {
                if (enemyTool.color == blacktool.color) {
                  if (blacktool.type[1] != "q " && blacktool.type[1] != "r ") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
          filterWhite.forEach((whitetool) => {
            if (whitetool.location.row == king.location.row) {
              if (
                whitetool.location.col < enemyTool.location.col &&
                whitetool.location.col > king.location.col
              ) {
                if (enemyTool.color == whitetool.color) {
                  if (whitetool.type[1] != "q " && whitetool.type[1] != "r ") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
        }
      }
      if (
        enemyTool.location.col < king.location.col &&
        tool.location.col < king.location.col
      ) {
        if (enemyTool.location.col < tool.location.col) {
          divs.forEach((div) => {
            if (Number(div.id[0]) != king.location.row) {
              closSlots(div, tool);
            }
          });
          filterBlack.forEach((blacktool) => {
            if (blacktool.location.row == king.location.row) {
              if (
                blacktool.location.col > enemyTool.location.col &&
                blacktool.location.col < king.location.col
              ) {
                if (enemyTool.color == blacktool.color) {
                  if (blacktool.type[1] != "q " && blacktool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
          filterWhite.forEach((whitetool) => {
            if (whitetool.location.row == king.location.row) {
              if (
                whitetool.location.col > enemyTool.location.col &&
                whitetool.location.col < king.location.col
              ) {
                if (enemyTool.color == whitetool.color) {
                  if (whitetool.type[1] != "q" && whitetool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
        }
      }
    }
    if (
      tool.location.col == king.location.col &&
      enemyTool.location.col == king.location.col
    ) {
      if (
        enemyTool.location.row > king.location.row &&
        tool.location.row > king.location.row
      ) {
        if (enemyTool.location.row > tool.location.row) {
          divs.forEach((div) => {
            if (Number(div.id[1]) != king.location.col) {
              closSlots(div, tool);
            }
          });
          filterBlack.forEach((blacktool) => {
            if (blacktool.location.col == king.location.col) {
              if (
                blacktool.location.row < enemyTool.location.row &&
                blacktool.location.row > king.location.row
              ) {
                if (enemyTool.color == blacktool.color) {
                  if (blacktool.type[1] != "q" && blacktool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
          filterWhite.forEach((whitetool) => {
            if (whitetool.location.col == king.location.col) {
              if (
                whitetool.location.row < enemyTool.location.row &&
                whitetool.location.row > king.location.row
              ) {
                if (enemyTool.color == whitetool.color) {
                  if (whitetool.type[1] != "q" && whitetool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
        }
      }
      if (
        enemyTool.location.row < king.location.row &&
        tool.location.row < king.location.row
      ) {
        if (enemyTool.location.row < tool.location.row) {
          divs.forEach((div) => {
            if (Number(div.id[1]) != king.location.col) {
              closSlots(div, tool);
            }
          });
          filterBlack.forEach((blacktool) => {
            if (blacktool.location.col == king.location.col) {
              if (
                blacktool.location.row > enemyTool.location.row &&
                blacktool.location.row < king.location.row
              ) {
                if (enemyTool.color == blacktool.color) {
                  if (blacktool.type[1] != "q" && blacktool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
          filterWhite.forEach((whitetool) => {
            if (whitetool.location.col == king.location.col) {
              if (
                whitetool.location.row > enemyTool.location.row &&
                whitetool.location.row < king.location.row
              ) {
                if (enemyTool.color == whitetool.color) {
                  if (whitetool.type[1] != "q" && whitetool.type[1] != "r") {
                    tool.setsOfMovs();
                  }
                } else {
                  tool.setsOfMovs();
                }
              }
            }
          });
        }
      }
    }
  });
}
