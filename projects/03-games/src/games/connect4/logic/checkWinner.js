import { WIN_COMBOS, TURNS, BOARD_LIMITS_LEFT, BOARD_LIMITS_RIGHT, BOTTOM_ROW, DIAGONAL_WIN_COMBOS } from "../constants";

let nodesCount = 0;

export const checkWinner = (newBoard) => {
    for(let combo of WIN_COMBOS){
        const [a, b, c, d] = combo;
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
    for(let i in BOTTOM_ROW){
        for(let newIndex = index; newIndex <= BOTTOM_ROW[BOTTOM_ROW.length-1]; newIndex+=BOTTOM_ROW.length){
            if(newIndex === BOTTOM_ROW[i]){
                while(newBoard[newIndex] != null){
                    newIndex-=BOTTOM_ROW.length;
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

export const checkWinnerAlternative = (newBoard, newIndex) => {
    const currentPosition = newIndex;
    const leftMove = currentPosition - 1;
    const rightMove = currentPosition + 1;
    const downMove = currentPosition + BOTTOM_ROW.length;

    applyMovement(currentPosition, rightMove, newBoard)
    applyMovement(currentPosition, leftMove, newBoard)
    if(nodesCount != 3){
        applyMovement(currentPosition, downMove, newBoard)
    }
    checkDiagonalWinner(newBoard);

    if(nodesCount == 3){
        nodesCount = 0;
        return newBoard[currentPosition];
    }
}

const applyMovement = (prevPosition, movement, newBoard) => {
    const previousPosition = prevPosition;
    const currentPosition = movement;
    let result = prevPosition - currentPosition;
    let nextMove;

    if(result == 1){
        nextMove = currentPosition - 1;
    } else if(result == -1){
        nextMove = currentPosition + 1;
    } else if(result == -BOTTOM_ROW.length){
        nextMove = currentPosition + BOTTOM_ROW.length;
    }

    if((newBoard[currentPosition] != newBoard[previousPosition])){
        if(nodesCount != 3) nodesCount = 0;
        return;
    } else if (newBoard[currentPosition] == newBoard[previousPosition]){
        if((BOARD_LIMITS_LEFT.includes(currentPosition) || BOARD_LIMITS_RIGHT.includes(currentPosition)) && (result == 1 || result == -1)){
            if(nodesCount == 2){
                nodesCount++;
            }
            return;
        } else{
            nodesCount++;
            applyMovement(currentPosition, nextMove, newBoard);
        }
    }
}

const checkDiagonalWinner = (newBoard) => {
    for(let combo of DIAGONAL_WIN_COMBOS){
        const [a, b, c, d] = combo;
        if(newBoard[a] != null &&
            newBoard[a] == newBoard[b] &&
            newBoard[a] == newBoard[c] &&
            newBoard[a] == newBoard[d]
        ){
            nodesCount = 3;
        }
    }
}
