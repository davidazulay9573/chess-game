import { openSlots } from "../script.js";
import { King } from "../game_tools/king";
import { GameTool } from "../game_tools/gameTool.js";

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
    const rook = rooks.find((rook) => rook.location.col === 8)!;
 
  if (checkTheWay(king, Number(`${king.location.row}6`))){
     if (
       document.getElementById(`${king.location.row}6`)?.children.length == 0
     ) {
       if (rook) {
         if (rook.orderOfMovements.length == 1) {
           if (king.orderOfMovements.length == 1) {
             openSlots(div, king.color);
           }
         
         }
       }
     }
    }
  
    king.htmlElement.addEventListener("dragend", () => {
     swichKingAndRook(king, rook, "6", "7");
    });
   
 }
  function long(king:King,rooks:GameTool[], div:HTMLElement){
   const rook = rooks.find((rook) => rook.location.col === 1)!;

     if ( checkTheWay(king, Number(`${king.location.row}4`))){
      if ( document.getElementById(`${king.location.row}2`)?.children.length == 0) {
        if (rook) {
          if (rook.orderOfMovements.length == 1) {
            if (king.orderOfMovements.length == 1) {
              openSlots(div, king.color);
            }
          
          }
        }
     }
    }
  
    king.htmlElement.addEventListener("dragend", () => {
       swichKingAndRook(king, rook, "4", "3");
    });
  }

  
  function checkTheWay(king: King, location: number) {
    for (const enemyTool of king.enemies) {
      if (enemyTool.possibleSlots.includes(location) ||    
         enemyTool.possibleSlots.includes(Number(`${king.location.row}${king.location.col}`)
        )) {
        return false;
      }
    }

    return true;
  }
 

  function swichKingAndRook(king:King, rook:GameTool,rookNewLocation:string,kingNewLoction:string){
   
     let toolOnSlot = document.getElementById(`${king.location.row}${kingNewLoction}`)?.querySelector("img")!;
   
     if (king.htmlElement) {
       if (king.htmlElement == toolOnSlot) {
         if (king.orderOfMovements.length == 2) {
             if (rook) {
               if (rook.orderOfMovements.length == 1) {
                 document
                   .getElementById(`${king.location.row}${rookNewLocation}`)
                   ?.appendChild(rook.htmlElement);
               }
             }
         }
       }
     }
  }
 