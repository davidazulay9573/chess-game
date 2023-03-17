import { GameTool } from "./tools.js";
import { game, onlyClosSlots } from "../script.js";
import { castling } from "../actions/castling.js";
export class King extends GameTool {
  enemies: GameTool[];
  friendsToFight: GameTool[];

  constructor(
    color: string,
    type: string,
    img: string,
    opponentsTools: GameTool[],
    friendsToFight: GameTool[]
  ) {
    super(color, type, img);
    {
      this.enemies = opponentsTools;
      this.friendsToFight = friendsToFight;
      
    }
  }
  setsOfMovs(): void {
  
    this.possibleSlots = [];
    let divs = this.chesBoard.querySelectorAll("div");
    divs.forEach((div) => {
      if (
        this.location.row == Number(div.id[0]) ||
        this.location.row == Number(div.id[0]) + 1 ||
        this.location.row == Number(div.id[0]) - 1
      ) {
        if (
          this.location.col == Number(div.id[1]) ||
          this.location.col == Number(div.id[1]) + 1 ||
          this.location.col == Number(div.id[1]) - 1
        ) {
          this.possibleSlots.push(Number(div.id));

          div.setAttribute("ondrop", "drop(event)");
          div.setAttribute("ondragover", "allowDrop(event)");

          if (
            !div.querySelector("img") ||
            div.querySelector("img")?.id[0] != this.type[0]
          ) {
            div.setAttribute("data-toggle", "canMove");
          }
        }
      }
      this.enemies.forEach((tool) => {
        if (!document.getElementById(tool.type)) {
          tool.possibleSlots = [];
          tool.location.row = -1;
          tool.location.col = -1;
        }
      });

      this.friendsToFight.forEach((tool) => {
        if (!document.getElementById(tool.type)) {
          tool.possibleSlots = [];
          tool.location.row = -1;
          tool.location.col = -1;
        }
      });
      
       if (this.orderOfMovements.length == 1) {
         castling(div, this);
       }
       
      if (this.color == "W") {
        game.black.forEach((tool) => {
        
            if (tool.type[1] != "p") {
              tool.possibleSlots.forEach((location) => {
                if (Number(div.id) == location) {
                  onlyClosSlots(div, this);
                }
              });
            } else {
              tool.posibleToEat.forEach((location) => {
                if (Number(div.id) == location) {
                  onlyClosSlots(div, this);
                }
              });
            }
        });
      }
      if (this.color == "B") {
        game.white.forEach((tool) => {
            
          if (tool.type[1] != "p") {
            tool.possibleSlots.forEach((location) => {
              if (Number(div.id) == location) {
                onlyClosSlots(div, this);
              }
            });
          } else {
            tool.posibleToEat.forEach((location) => {
              if (Number(div.id) == location) {
                onlyClosSlots(div, this);
              }
            });
          }
        });
      }
     
      this.possibleSlots = this.possibleSlots.filter((location) => {
        return location != Number(`${this.location.row}${this.location.col}`);
      });
    });
  }
}
