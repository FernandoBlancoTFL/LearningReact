import { useState } from 'react'
import { TaTeTiGame } from './games/ta-te-ti/TaTeTiGame.jsx'
import './css/App.css'

function App() {
  const [gameSelected, setGameSelected] = useState(null);
  const [gameStart, setGameStart] = useState(false);

  const selectedButtonClass = gameSelected ? 'selected' : '';

  const handleClick = (game) => {
    setGameSelected(game);
  }

  const handleClickStartGame = () => {
    gameSelected ? setGameStart(!gameStart) : null;
    setGameSelected(null);
  }

  return (
    <>
      <main>
        {
          !gameStart && (
            <section className='gm-pickgame'>
            <h3>Click en un juego para jugar:</h3>
            <div className='gm-pickgame-selection'>
              <div 
                className={gameSelected === 'Ta-Te-Ti' ? `gm-pickgame-selection-tateti ${selectedButtonClass}`: 'gm-pickgame-selection-tateti'} 
                onClick={() => {handleClick('Ta-Te-Ti')}}>
                Ta-Te-Ti
              </div>
              <div 
                className={gameSelected === 'Cuatro en raya' ? `gm-pickgame-selection-connect4 ${selectedButtonClass}`: 'gm-pickgame-selection-connect4'} 
                onClick={() => {setGameSelected('Cuatro en raya')}}>
                Cuatro en raya
              </div>
              <div 
                className={gameSelected === 'Atrapa puntos' ? `gm-pickgame-selection-touchpoint ${selectedButtonClass}`: 'gm-pickgame-selection-touchpoint'} 
                onClick={() => {setGameSelected('Atrapa puntos')}}>
                Atrapa puntos
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
              <h2>{`Jugando: ${gameSelected}`}</h2>
              {/* {TODO: colocar el juego correspondiente según la selección del usuario} */}
              <TaTeTiGame></TaTeTiGame>
            </section>
          )
        }
        
      </main>
    </>
  )
}

export default App
