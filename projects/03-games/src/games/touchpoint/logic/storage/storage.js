export function saveHighScoreOnLocalStorage(score){
    window.localStorage.setItem('highscore', JSON.stringify(score));
}