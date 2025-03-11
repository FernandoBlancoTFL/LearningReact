import { Circle } from "./Circle.jsx";
import '/src/css/App.css';

export function Connect4Board({board, updateBoard, restartGame, turn}){

    return (
        <section className="gm-board">
            <button id='gm-board-reset-button' onClick={restartGame}>Reiniciar juego</button>
            <div className= 'gm-board-container-elements'>
                {board.map( (content, index) => 
                    <section className='gm-board-container-element ' key={index}>
                        <Circle index={index} updateBoard={updateBoard} turn={turn}>{content}</Circle>
                    </section>
                )}
            </div>
            <div className='gm-board-container-element-turn'>
                <p>Turno:</p>
                <section className='gm-board-container-element game-container-turn' key={0}>
                    <Circle index={0} updateBoard={updateBoard} turn={turn}>{true}</Circle>
                </section>
            </div>
        </section>
    );
}