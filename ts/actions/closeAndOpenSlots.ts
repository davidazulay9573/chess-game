import { GameTool } from "../game_tools/gameTool.js";

export function openSlots(slotPR: HTMLElement, color: string) {
  slotPR.setAttribute("ondrop", "drop(event)");
  slotPR.setAttribute("ondragover", "allowDrop(event)");

  if (
    !slotPR.querySelector("img") ||
    slotPR.querySelector("img")?.id[0] != color
  ) {
    slotPR.setAttribute("data-toggle", "canMove");
  }
}

export function closSlots(slotPR: HTMLElement, toolPR: GameTool) {
  slotPR.removeAttribute("ondrop");
  slotPR.removeAttribute("ondragover");
  slotPR.removeAttribute("data-toggle");

  toolPR.possibleSlots.forEach((location) => {
    if (location == Number(slotPR.id)) {
      let index = toolPR.possibleSlots.indexOf(location);
      toolPR.possibleSlots.splice(index, 1);
    }
  });
}
export function onlyClosSlots(slotPR: HTMLElement, toolPR: GameTool) {
  slotPR.removeAttribute("ondrop");
  slotPR.removeAttribute("ondragover");
  slotPR.removeAttribute("data-toggle");
}
