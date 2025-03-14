import { FINAL_TIME_STRING, INITIAL_TIME_IN_MILLISECONDS } from "../constants";

export function paintBorderToNode(board){
    const divs = document.querySelectorAll('.gm-section-point');

    board.forEach((value, i) => {
        if (value !== null && divs[i]) {
            divs[i].className = `gm-section-point ${value ? 'active-node' : 'no-active-node'}`;
        }
    });
}

export function setBorderToNode(board, score, setScore, setBoard, index){
    if(index !== undefined){
        if(board[index] === true){
            const newScore = score + 1;
            setScore(newScore);
            const newBoard2 = Array(36).fill(false);
            const randomNumber = Math.floor(Math.random() * newBoard2.length);
            newBoard2[randomNumber] = true;
            setBoard(newBoard2);
        }
    } else if(index === undefined){
        const newBoard = Array(36).fill(false);
        const randomNumber = Math.floor(Math.random() * newBoard.length);
        newBoard[randomNumber] = true;
        setBoard(newBoard);
    }
}

export function startTimer(setTime){
    let newTime = FINAL_TIME_STRING;
    let timeInMilliseconds = INITIAL_TIME_IN_MILLISECONDS;

    let endTime = Date.now() + timeInMilliseconds;

    const interval = setInterval(() => {
        const remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(interval);
            newTime = FINAL_TIME_STRING;
            setTime(newTime);
            return;
        }
        const seconds = Math.floor(remainingTime / 1000);
        const milliseconds = remainingTime % 1000;

        newTime = seconds < 10 ? `00:0${seconds}:${milliseconds}` : `00:${seconds}:${milliseconds}`;
        setTime(newTime);
    }, 1);
}

