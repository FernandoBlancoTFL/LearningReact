import {WIN_COMBOS} from '../constants.js'

export const checkWinner = (boardToCheck) => {
  for(const combo of WIN_COMBOS){
    //const [a, b, c] = combo;
    if(boardToCheck[combo[0]] != null && 
      boardToCheck[combo[0]] === boardToCheck[combo[1]] && 
      boardToCheck[combo[0]] === boardToCheck[combo[2]]){
      return boardToCheck[combo[0]];
    }
  }
  return null;
}

//recorrer todo el array y fijarse si no hay nulls, si no hay && winner=false, EMPATE
export const checkEndGame = (newBoard) => {
  for(const value of newBoard){
    if(value == null){
      return value;
    }
  }
  return true;

  //también se podría usar return newBoard.every((square) => square != null);
}

