import { Point } from "./Point";

export function TouchPointBoard({score, maxScore, time, board, updateBoard, position, activateMouseEffect, restartGame}){
    return(
        <section className="gm-section">
            <div id="gm-section-points">
                <div className="gm-section-points-point">Puntuación: {score}</div>
                <div className="gm-section-points-point">Máxima puntuación: {maxScore}</div>
            </div>
            
            <div className="gm-section-timer">{time}</div>

            <div id="gm-section-playground">
                {board.map( (content, index) => 
                    <Point index={index} updateBoard={updateBoard} key={index}>{content}</Point>
                )}
            </div>

            <div id="gm-section-ball" style=
                {{
                    position: 'absolute',
                    backgroundColor: '#09f',
                    borderRadius: '50%',
                    opacity: 0.8,
                    pointerEvents: 'none',
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}
            />
            <div id="gm-section-buttons">
                <button id='gm-section-startGame-button' onClick={activateMouseEffect}>Comenzar juego</button>
                <button id='gm-section-reset-button' onClick={restartGame}>Reiniciar juego</button>
            </div>
        </section>
    );
} 



