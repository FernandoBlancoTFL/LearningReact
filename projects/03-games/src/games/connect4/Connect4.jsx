import { useEffect, useState } from "react"
import { Connect4Board } from "./components/Connect4Board.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerAlternative, setItemOnBoard, paintNodes } from "./logic/checkWinner.js";
import { saveGameOnLocalStorage, deleteGameFromLocalStorage } from "./logic/storage/storage.js";
import './css/gm-container.css'


export function Connect4(){
    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = JSON.parse(window.localStorage.getItem('connect4Board'));
        return boardFromLocalStorage ? boardFromLocalStorage : Array(20).fill(null);
    });
    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = JSON.parse(window.localStorage.getItem('connect4Turn'));
        return turnFromLocalStorage ? turnFromLocalStorage : TURNS.O;
    });
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        paintNodes(board, turn);
    }, [board]);

    const updateBoard = (index) => {
        if (winner != null) return;

        const newBoard = [...board];
        const newIndex = setItemOnBoard(newBoard, index, turn);
        setBoard(newBoard);
        
        const newWinner = checkWinnerAlternative(newBoard, newIndex);

        if(newWinner != null){
            const winnerString = newWinner ? 'Azul' : 'Rojo';
            alert(`Ganador: ${winnerString}`);
            setWinner(newWinner);
        }

        const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        saveGameOnLocalStorage(newBoard, newTurn);
    }

    const restartGame = () => {
        setBoard(Array(20).fill(null));
        setTurn(TURNS.O);
        setWinner(null);
        deleteGameFromLocalStorage();

        const divs = document.querySelectorAll(".gm-board-circle");
        divs.forEach(div => {
            div.className = "gm-board-circle";
        });
    }

    return (
        <Connect4Board board={board} updateBoard={updateBoard} restartGame={restartGame} turn={turn}></Connect4Board>
    )
}