import { useState } from "react"

export function Square({children, changeTurn}){

    const [state, setState] = useState(null);

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