import { Square } from "./Square";
import '/src/css/App.css';

export function Board({board, updateBoard}){
    return (
        <>
            {board.map( (_, index) => {
                return (
                    <section className='square-container' key={index}>
                        <Square updateBoard={updateBoard} index={index}>
                            {board[index]}
                        </Square>
                    </section>
                )
            })}
        </>
    );
}

//La función anterior tiene la siguiente sintaxis en la función map:
//board.map( () => {} ), cuando se usan corchetes, SI o SI se tiene que usar return

//pero puede tener la siguiente sintaxis
//board.map( () => ()) donde devuelve un solo valor y no hace falta poner return. 
// También se puede escribir sin paréntesis.

//A continuación como sería con la segunda sintáxis.
// {board.map( (_, index) => 
//     <section className='square-container' key={index}>
//         <Square updateBoard={updateBoard} index={index}>
//             {board[index]}
//         </Square>
//     </section>
// )}


