export function saveGameOnLocalStorage(boardToStorage, turnToStorage){
    window.localStorage.setItem('connect4Board', JSON.stringify(boardToStorage));
    window.localStorage.setItem('connect4Turn', JSON.stringify(turnToStorage));
}

export function deleteGameFromLocalStorage(){
    window.localStorage.removeItem('connect4Board');
    window.localStorage.removeItem('connect4Turn');
}

export function paintNodes(newBoard){
    for(const node in newBoard){
        console.log(node)
    }
}