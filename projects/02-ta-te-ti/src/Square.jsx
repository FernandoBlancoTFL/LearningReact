import { useState } from "react"

export function Square({children, changeTurn, initialTurn}){

    const [state, setState] = useState(initialTurn);

    const setSymbol = () => {
        if(state == null){
            setState(children);
            changeTurn();
        }
    }

    return (
        <div onClick={setSymbol}>{state}</div>
    )
}