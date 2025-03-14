import { useEffect, useState } from "react";
import { TouchPointBoard } from "./components/TouchPointBoard";
import { paintBorderToNode, setBorderToNode, startTimer } from "./logic/logic";
import { saveHighScoreOnLocalStorage } from "./logic/storage/storage";
import { INITIAL_TIME_STRING, FINAL_TIME_STRING } from "./constants";
import "./css/gm-container.css"

export function TouchPoint(){
    const [board, setBoard] = useState(Array(36).fill(false));
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x: 0, y:0});
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(() => {
        const scoreFromLocalStorage = JSON.parse(window.localStorage.getItem('highscore'));
        return scoreFromLocalStorage ? scoreFromLocalStorage : 0;
    });
    const [time, setTime] = useState(INITIAL_TIME_STRING);

    useEffect(()=>{
        document.body.classList.toggle('no-cursor', enabled);

        return () => {
            document.body.classList.remove('no-cursor');
        }
    }, [enabled]);

    useEffect(()=>{
        const element = document.getElementById("gm-section-ball");
        element.style.display = enabled ? 'block' : 'none';

        return () => {
            element.style.display = 'none';
        }
    }, [enabled]);

    useEffect(() => {
        const handleMove = (event) => {
            const {clientX, clientY} = event;
            setPosition({x: clientX, y:clientY});
        }

        if(enabled){
            window.addEventListener('pointermove', handleMove);
        }

        return () => {
            window.removeEventListener('pointermove', handleMove);
        }

    }, [enabled]);

    useEffect(() => {
        paintBorderToNode(board);
    },[board]);

    useEffect(() => {
        if (time === FINAL_TIME_STRING) {
            setEnabled(!enabled);
            alert(`Tu puntuación es: ${score}`)
            if(score > maxScore){
                setMaxScore(score);
                saveHighScoreOnLocalStorage(score);
            }
        }
    }, [time]);

    const activateMouseEffect = () => {
        startGame(setEnabled, enabled, board, score, setScore, setBoard);
    }

    const startGame = (setEnabled, enabled, board, score, setScore, setBoard) => {
        setEnabled(!enabled);
        setBorderToNode(board, score, setScore, setBoard);
        startTimer(setTime);
    }
    
    const updateBoard = (index) => {
        if(time != FINAL_TIME_STRING){
            setBorderToNode(board, score, setScore, setBoard, index);
        }
    }

    const restartGame = () => {
        setBoard(Array(36).fill(false));
        setEnabled(false);
        setScore(0);
        setTime(INITIAL_TIME_STRING);
        setPosition({x: 0, y:0});
        startGame(setEnabled, enabled, board, score, setScore, setBoard);
    }

    return (
        <TouchPointBoard score={score} maxScore={maxScore} time={time} 
        board={board} updateBoard={updateBoard} position={position}
        activateMouseEffect={activateMouseEffect} restartGame={restartGame}></TouchPointBoard>
    );
}