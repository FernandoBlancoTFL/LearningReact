export const saveGameInLocalStorage = (newBoard, newTurn) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));
}

export const restartGameInLocalStorage = () => {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');

    //otra forma de hacerlo
    //saveGameInLocalStorage(Array(9).fill(null), TURNS.X);
}