import React from 'react';
import { useState } from 'react'
import { Square } from './Square';
import './css/App.css'

export function App() {
  const FIRST_TURN = 'X';

  const [turn, setTurn] = useState(FIRST_TURN);

  const newTurn = (turn == FIRST_TURN) ? 'O' : FIRST_TURN;

  const changeTurn = () => {
    setTurn(newTurn);
  }

  const setSquare = () => {
    return (
      <section className='square-container'>
        <Square changeTurn={changeTurn}>
          {turn}
        </Square>
      </section>
    );
  }

  return (
    <section className='game-container'>
      <div className='game-container-squares'>
        {setSquare()}
        {setSquare()}
        {setSquare()}
      </div>
      <section>Turn: {turn}</section>
    </section>
    
  )
}

