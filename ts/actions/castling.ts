import { game, onlyClosSlots, openSlots } from "../script.js";
import { King } from "../game_tools/king";
import { GameTool } from "../game_tools/tools";

export function castling(div: HTMLElement, king: King,rooks:GameTool[]) {
   if (king.location.row === Number(div.id[0])) {
     if (king.location.col === Number(div.id[1]) - 2) {

          short(king,rooks, div)
       }
      if (king.location.col === Number(div.id[1]) + 2) {
          long(king,rooks, div)
         } 
       }
  }
 
 function short(king:King,rooks:GameTool[], div:HTMLElement){
   if (
         document.getElementById(`${king.location.row}6`)?.children
                .length == 0
      ) {
    let rook = rooks.find((rook) => rook.location.col === 8)!;
    if(rook){
      if (rook.orderOfMovements.length == 1) {
        if (king.orderOfMovements.length == 1) {
          openSlots(div, king.color);
        }
        king.htmlElement.addEventListener("dragend", () => {
          if (king.orderOfMovements.length == 1) {
           if (rook.orderOfMovements.length == 1) {

            let tool = document
              .getElementById(`${king.location.row}7`)
              ?.querySelector("img") as HTMLElement;
            if (tool) {
              if (tool.id[1] == "k") {
                let rookOldLocation = document.getElementById(
                  `${king.location.row}8`
                ) as HTMLElement;
                let rookElement = rookOldLocation.querySelector("img")!;
                if (rookElement) {
                  rookOldLocation.removeChild(rookElement);
                  document
                    .getElementById(`${king.location.row}6`)
                    ?.appendChild(rookElement);
                }
               }
              }
            }
          }

          king.setsOfMovs();
          king.Initialize();
          game.stepsList.push(king);

          game.white.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
          game.black.forEach((tool2) => {
            tool2.setsOfMovs();
            tool2.Initialize();
            tool2.checkIfMovingAllowed();
          });
        });
      } 
    }
    
  }
 }
  function long(king:King,rooks:GameTool[], div:HTMLElement){
    if ( document.getElementById(`${king.location.row}2`)?.children.length == 0 ) {
     let rook = rooks.find((rook) => rook.location.col === 1)!;
    if(rook){
      if (rook.orderOfMovements.length == 1) {
           if (king.orderOfMovements.length == 1) {
             openSlots(div, king.color);
           }
           king.htmlElement.addEventListener("dragend", () => {
             if (king.orderOfMovements.length == 2) {
               if (rook.orderOfMovements.length == 1) {

               let tool = document
                 .getElementById(`${king.location.row}3`)
                 ?.querySelector("img") as HTMLElement;
               if (tool) {
                 if (tool.id[1] == "k") {
                   let rookOldLocation = document.getElementById(
                     `${king.location.row}1`
                   ) as HTMLElement;
                   let rookfor = rookOldLocation.querySelector("img")!;
                   if (rookfor) {
                     rookOldLocation.removeChild(rookfor);
                     document
                       .getElementById(`${king.location.row}4`)
                       ?.appendChild(rookfor);
                   }
                 }
                }
               }
             }
             king.setsOfMovs();
             king.Initialize();
             game.stepsList.push(king);
             game.white.forEach((tool2) => {
               tool2.setsOfMovs();
               tool2.Initialize();
               tool2.checkIfMovingAllowed();
             });
             game.black.forEach((tool2) => {
               tool2.setsOfMovs();
               tool2.Initialize();

               tool2.checkIfMovingAllowed();
             });
           });
      }
    }
      
    
            
          }
  }

  