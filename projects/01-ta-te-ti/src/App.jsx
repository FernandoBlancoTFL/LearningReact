import { useState } from 'react'
import { Board } from './components/Board.jsx';
import { checkWinner, checkEndGame } from './logic/checkWinner';
import { restartGameInLocalStorage, saveGameInLocalStorage } from './logic/storage/storage.js';
import { TURNS } from './constants.js'
import React from 'react';
import './css/App.css'

export function App() {
  const [board, setBoard] = useState( () => {
    const boardFromLocalStorage = JSON.parse(window.localStorage.getItem('board'));
    return boardFromLocalStorage ? boardFromLocalStorage : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = JSON.parse(window.localStorage.getItem('turn'));
    return turnFromLocalStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null); //null: no hay ganador, false: empate

  const updateBoard = (index) => {
    //si ya hay un simbolo colocado en esa posición o ya hay un ganador, se cancela la ejecución de la función.
    if (board[index] || winner) return;

    //actualizo tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambio de turno (simbolo)
    const newTurn = (turn == TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //guardado partida en localStorage
    saveGameInLocalStorage(newBoard, newTurn);

    //verifico si hay ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      alert(`El ganador es: ${newWinner}`);
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)){
      setWinner(false);
      alert(`Empate`);
    }
  }
  //el siguiente código se me ocurrio para guardar los estados pero es mejor lo que se hace al
  //comienzo en donde se usa una función flecha cuando se inicializa el estado
  const loadGame = () =>{
    const localStorageBoard = JSON.parse(window.localStorage.getItem('board'));
    const localStorageTurn = JSON.parse(window.localStorage.getItem('turn'));

    if(localStorageBoard && localStorageTurn){
      setBoard(localStorageBoard);
      setTurn(localStorageTurn);
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
      <button id='game-container-reset-button' onClick={restartGame}>Restart game</button>
      <div className='game-container-squares'>
        {<Board board={board} updateBoard={updateBoard}></Board>}
      </div>
      <section id='game-container-turn-message'>Turn: {turn}</section>
    </section>
    
  )
}

