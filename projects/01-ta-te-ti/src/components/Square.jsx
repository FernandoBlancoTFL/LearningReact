export function Square({children, updateBoard, index}){
    
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick}>{children}</div>
    )
}