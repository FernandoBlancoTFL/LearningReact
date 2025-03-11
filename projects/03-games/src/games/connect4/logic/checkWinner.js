import { WIN_COMBOS, TURNS } from "../constants";

export const checkWinner = (newBoard) => {

    for(let diagonal of WIN_COMBOS){
        const [a, b, c, d] = diagonal;
        if(newBoard[a] != null &&
            newBoard[a] == newBoard[b] &&
            newBoard[a] == newBoard[c] &&
            newBoard[a] == newBoard[d]
        ){
            return newBoard[a];
        }
    }
}

export const setItemOnBoard = (newBoard, index, turn) => {
    const bottomRow = [12, 13, 14, 15];

    for(let i in bottomRow){
        for(let newIndex = index; newIndex <= bottomRow[3]; newIndex+=4){
            if(newIndex === bottomRow[i]){
                while(newBoard[newIndex] != null){
                    newIndex-=4;
                }
                if(newBoard[newIndex] == null){
                    newBoard[newIndex] = turn;
                    return newIndex;
                }
            }
        }
    }
}

export const paintNodes = (board, turn) => {
    const divs = document.querySelectorAll('.gm-board-circle');
    const turnClass = turn == TURNS.X ? 'selected-player1' : 'selected-player2';
    const turnDiv = document.querySelectorAll(".game-container-turn");
    turnDiv[0].children[0].className = `gm-board-circle ${turnClass}`;

    board.forEach((value, i) => {
        if (value !== null && divs[i]) {
            divs[i].className = `gm-board-circle ${value ? 'selected-player1' : 'selected-player2'}`;
        }
    });
};