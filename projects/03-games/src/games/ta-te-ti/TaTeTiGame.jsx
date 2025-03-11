import { useState } from 'react'
import { Board } from './components/Board.jsx';
import { checkWinner, checkEndGame } from './logic/checkWinner.js';
import { restartGameInLocalStorage, saveGameInLocalStorage } from './logic/storage/storage.js';
import { TURNS } from './constants.js'
import React from 'react';
import './css/index.css'
import './css/ta-te-ti.css'

export function TaTeTiGame() {
  const [board, setBoard] = useState( () => {
    const boardFromLocalStorage = JSON.parse(window.localStorage.getItem('board'));
    return boardFromLocalStorage ? boardFromLocalStorage : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = JSON.parse(window.localStorage.getItem('turn'));
    return turnFromLocalStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = (turn == TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameInLocalStorage(newBoard, newTurn);

    const newWinner = checkWinner(newBoard);
    if(newWinner){
      alert(`El ganador es: ${newWinner}`);
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)){
      setWinner(false);
      alert(`Empate`);
    }
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    restartGameInLocalStorage();
  }

  return (
    <section className='game-container'>
      <button id='game-container-reset-button' onClick={restartGame}>Reiniciar juego</button>
      <div className='game-container-squares'>
        {<Board board={board} updateBoard={updateBoard}></Board>}
      </div>
      <section id='game-container-turn-message'>Turno: {turn}</section>
    </section>
  )
}

