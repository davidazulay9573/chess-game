import { closSlots, onlyClosSlots } from "./script.js";
export function skipLimitStrat(tool) {
    let divs = document.getElementById("chessboard").querySelectorAll("div");
    let filterDivs = Array.from(divs).filter((div) => {
        return (tool.location.col == Number(div.id[1]) ||
            tool.location.row == Number(div.id[0]));
    });
    filterDivs.forEach((div) => {
        let imgTool = div.querySelector("img");
        if (imgTool) {
            if (Number(imgTool.parentElement.id[1]) == tool.location.col) {
                if (tool.location.row > Number(imgTool.parentElement.id[0])) {
                    filterDivs.forEach((div) => {
                        if (Number(div.id[0]) < Number(imgTool.parentElement.id[0])) {
                            if (imgTool.id[1] == "k" &&
                                imgTool.id[0] != tool.color) {
                                onlyClosSlots(div, tool);
                            }
                            else {
                                closSlots(div, tool);
                            }
                        }
                    });
                }
                if (tool.location.row < Number(imgTool.parentElement.id[0])) {
                    filterDivs.forEach((div) => {
                        if (Number(div.id[0]) > Number(imgTool.parentElement.id[0])) {
                            if (imgTool.id[1] == "k" &&
                                imgTool.id[0] != tool.color) {
                                onlyClosSlots(div, tool);
                            }
                            else {
                                closSlots(div, tool);
                            }
                        }
                    });
                }
            }
            if (Number(imgTool.parentElement.id[0]) == tool.location.row) {
                if (tool.location.col < Number(imgTool.parentElement.id[1])) {
                    filterDivs.forEach((div) => {
                        if (Number(div.id[1]) > Number(imgTool.parentElement.id[1])) {
                            if (imgTool.id[1] == "k" &&
                                imgTool.id[0] != tool.color) {
                                onlyClosSlots(div, tool);
                            }
                            else {
                                closSlots(div, tool);
                            }
                        }
                    });
                }
                if (tool.location.col > Number(imgTool.parentElement.id[1])) {
                    filterDivs.forEach((div) => {
                        if (Number(div.id[1]) < Number(imgTool.parentElement.id[1])) {
                            if (imgTool.id[1] == "k" &&
                                imgTool.id[0] != tool.color) {
                                onlyClosSlots(div, tool);
                            }
                            else {
                                closSlots(div, tool);
                            }
                        }
                    });
                }
            }
        }
    });
}
