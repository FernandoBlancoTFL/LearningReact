import '../css/point.css'

export function Point({children, index, updateBoard}){

    const handleMouseOver = () => {
        updateBoard(index);
    }

    return (
        <div className="gm-section-point" onMouseEnter={handleMouseOver}>{children}</div>
    );
}