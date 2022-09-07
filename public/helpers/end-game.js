var _endGame = function(won) {
    if(won) alert('You won the game');
    this.gameStatus = 'Completed';
    clearInterval(this.timeKeeper);
    this.timeKeeper = null;
}