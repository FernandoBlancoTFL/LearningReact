import { useState } from 'react'
import { TURNS } from "../constants.js";
import '.././css/circle.css'

export function Circle({children, index, updateBoard, turn}){

    const handleClick = (event) => {
        updateBoard(index, event.target.className);
    }

    return (
        <div className='gm-board-circle' onClick={handleClick}>
            {children}
        </div>
    )
}