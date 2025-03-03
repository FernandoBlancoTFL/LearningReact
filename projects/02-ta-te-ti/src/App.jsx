import React from 'react';
import { useState } from 'react'
import { Square } from './Square';
import './css/App.css'

export function App() {
  const FIRST_TURN = 'X';
  const initialTurn = null;

  const [turn, setTurn] = useState(FIRST_TURN);

  const newTurn = (turn == FIRST_TURN) ? 'O' : FIRST_TURN;

  const restartGame = () => {
    setTurn(null);
  }

  const changeTurn = () => {
    setTurn(newTurn);
  }

  const setSquare = () => {
    return (
      <section className='square-container'>
        <Square changeTurn={changeTurn} initialTurn={initialTurn}>
          {turn}
        </Square>
      </section>
    );
  }

  return (
    <section className='game-container'>
      <button id='game-container-reset-button' onClick={restartGame}>Reset game</button>
      <div className='game-container-squares'>
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
        {setSquare()}
      </div>
      <section id='game-container-turn-message'>Turn: {turn}</section>
    </section>
    
  )
}

