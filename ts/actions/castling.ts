import { game,openSlots } from "../script.js";
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
    const rook = rooks.find((rook) => rook.location.col === 8)!;
  if(shachcStat(king)){
   
  if (
    checkTheWay(king, Number(`${king.location.row}6`)) 
  ){
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
  }
    king.htmlElement.addEventListener("dragend", () => {
      if (king.orderOfMovements.length == 2) {

      chengKingTOrook(king, rook, "6", "7");
      }
    });
   
 }
  function long(king:King,rooks:GameTool[], div:HTMLElement){
   const rook = rooks.find((rook) => rook.location.col === 1)!;
   if(shachcStat(king)){


     if (
    checkTheWay(king, Number(`${king.location.row}4`)) 
  ){
      if (
        document.getElementById(`${king.location.row}2`)?.children.length == 0
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
  }

    king.htmlElement.addEventListener("dragend", () => {
      if (king.orderOfMovements.length == 1) {
         chengKingTOrook(king,rook,'4','3')
      }
    });

  
  }

  
  function checkTheWay(king: King, location: number) {
    for (const enemyTool of king.enemies) {
      if (enemyTool.possibleSlots.includes(location)) {
        return false;
      }
    }

    return true;
  }
  function shachcStat(king: King) {
    for (const enemyTool of king.enemies) {
      if (
        enemyTool.possibleSlots.includes(
          Number(`${king.location.row}${king.location.col}`)
        )
      ) {
        return false;
      }
    }

    return true;
  }

  function chengKingTOrook(king:King,rook:GameTool,rookNewLocation:string,kingNewLoction:string){
        if (rook.orderOfMovements.length == 1) {
          let tool = document
            .getElementById(`${king.location.row}${kingNewLoction}`)
            ?.querySelector("img") as HTMLElement;
          if (tool) {
            if (tool.id[1] == "k") {
              let rookOldLocation = document.getElementById(
                `${king.location.row}${rook.location.col}`
              )!;
              let rookfor = rookOldLocation.querySelector("img")!;
              if (rookfor) {
                rookOldLocation.removeChild(rookfor);
                document
                  .getElementById(`${king.location.row}${rookNewLocation}`)
                  ?.appendChild(rookfor);
              }
            }
          }
      
      }
   initializeKing(king)
  }
  function initializeKing(king:King){
        king.setsOfMovs();
        king.Initialize();
        king.checkIfMovingAllowed()
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
  }