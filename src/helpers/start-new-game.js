var _startNewGame = function(mode) {
    this.endGame(false);
    mineSweepeer.prepare(mode);
    mineSweepeer.loadMines();
    mineSweepeer.loadClues();

    document.getElementById('layer0').innerHTML = mineSweepeer.getBaseLayerContent();
    document.getElementById('layer1').innerHTML = mineSweepeer.getTopLayerContent();
    document.getElementById('main').className = 'main ' + mode.toLowerCase();    

    document.getElementById('counter').innerHTML = '0000';
}