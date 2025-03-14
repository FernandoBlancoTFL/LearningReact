import { useState } from 'react'
import { TaTeTiGame } from './games/ta-te-ti/TaTeTiGame.jsx'
import { Connect4 } from './games/connect4/Connect4.jsx';
import { TouchPoint } from './games/touchpoint/TouchPoint.jsx';
import './css/App.css'

function App() {
  const [gameSelected, setGameSelected] = useState(null);
  const [gameStart, setGameStart] = useState(false);

  const selectedButtonClass = gameSelected ? 'selected' : '';

  const handleClick = (game) => {
    setGameSelected(game);
  }

  const handleClickStartGame = () => {
    setGameStart(!gameStart);
  }

  const renderGame = () => {
    if(gameSelected === 'Ta-Te-Ti'){
      return <TaTeTiGame></TaTeTiGame>
    } else if(gameSelected === 'connect4'){
      return <Connect4></Connect4>
    } else if(gameSelected === 'touchpoint'){
      return <TouchPoint></TouchPoint>
    }
  }

  return (
    <>
      <main>
        {
          !gameStart && (
            <section className='gm-pickgame'>
            <h3>Selecciona un juego:</h3>
            <div className='gm-pickgame-selection'>
              <div 
                className={gameSelected === 'Ta-Te-Ti' ? `gm-pickgame-selection-tateti ${selectedButtonClass}`: 'gm-pickgame-selection-tateti'} 
                onClick={() => {handleClick('Ta-Te-Ti')}}>
                <img src='../src/assets/tateti.png' alt="" />
              </div>
              <div 
                className={gameSelected === 'connect4' ? `gm-pickgame-selection-connect4 ${selectedButtonClass}`: 'gm-pickgame-selection-connect4'} 
                onClick={() => {setGameSelected('connect4')}}>
                  <img src="../src/assets/connect4.png" alt="" />
              </div>
              <div 
                className={gameSelected === 'touchpoint' ? `gm-pickgame-selection-touchpoint ${selectedButtonClass}`: 'gm-pickgame-selection-touchpoint'} 
                onClick={() => {setGameSelected('touchpoint')}}>
                  <img src="../src/assets/touchpoint.png" alt="" />
              </div>
            </div>
            <button className='gm-pickgame-button' onClick={handleClickStartGame}>Comenzar a jugar</button>
          </section>
          )
        }

        {
          gameStart && (
            <section className='gm-playgame'>
              <button className='gm-playgame-button' onClick={() => {setGameStart(!gameStart)}}>
                Seleccionar otro juego
              </button>
              {renderGame()}
            </section>
          )
        }
        
      </main>
    </>
  )
}

export default App
