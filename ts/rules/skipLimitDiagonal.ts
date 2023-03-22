import { closSlots, onlyClosSlots } from "../actions/closeAndOpenSlots.js";
import { GameTool } from "../game_tools/gameTool.js";

export function skipLimitDiagonal(tool: GameTool) {
  const divs = document.getElementById("chessboard")!.querySelectorAll("div");
  const filterDivs = Array.from(divs).filter((div) => {
    return (
      tool.location.row - Number(div.id[0]) ==
        tool.location.col - Number(div.id[1]) ||
      Number(div.id[0]) - tool.location.row ==
        tool.location.col - Number(div.id[1])
    );
  });
  for (const div of filterDivs) {
    const imgTool = div.querySelector("img")!;
    if (imgTool) {
      if (tool.location.col < Number(imgTool.parentElement!.id[1])) {
        if (tool.location.row < Number(imgTool.parentElement!.id[0])) {
          filterDivs.forEach((div) => {
            if (
              Number(div.id[1]) > Number(imgTool.parentElement!.id[1]) &&
              Number(div.id[0]) > Number(imgTool.parentElement!.id[0])
            ) {
              if (imgTool.id[1] == "k" && imgTool.id[0] != tool.color) {
                onlyClosSlots(div, tool);
              } else {
                closSlots(div, tool);
              }
            }
          });
        }
        if (tool.location.row > Number(imgTool.parentElement!.id[0])) {
          filterDivs.forEach((div) => {
            if (
              Number(div.id[1]) > Number(imgTool.parentElement!.id[1]) &&
              Number(div.id[0]) < Number(imgTool.parentElement!.id[0])
            ) {
              if (imgTool.id[1] == "k" && imgTool.id[0] != tool.color) {
                onlyClosSlots(div, tool);
              } else {
                closSlots(div, tool);
              }
            }
          });
        }
      }
      if (tool.location.col > Number(imgTool.parentElement!.id[1])) {
        if (tool.location.row > Number(imgTool.parentElement!.id[0])) {
          filterDivs.forEach((div) => {
            if (
              Number(div.id[1]) < Number(imgTool.parentElement!.id[1]) &&
              Number(div.id[0]) < Number(imgTool.parentElement!.id[0])
            ) {
              if (imgTool.id[1] == "k" && imgTool.id[0] != tool.color) {
                onlyClosSlots(div, tool);
              } else {
                closSlots(div, tool);
              }
            }
          });
        }
        if (tool.location.row < Number(imgTool.parentElement!.id[0])) {
          filterDivs.forEach((div) => {
            if (
              Number(div.id[1]) < Number(imgTool.parentElement!.id[1]) &&
              Number(div.id[0]) > Number(imgTool.parentElement!.id[0])
            ) {
              if (imgTool.id[1] == "k" && imgTool.id[0] != tool.color) {
                onlyClosSlots(div, tool);
              } else {
                closSlots(div, tool);
              }
            }
          });
        }
      }
    }
  }
}
