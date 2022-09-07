// Sandeep
var _getBaseLayerContent = function () {
    var a = this.rows, b = this.columns;
    var totalTiles = a * b;
    var txt = '';
   
    for (var i = 0; i < totalTiles; i++) {
        var coordinates = this.getCoordinatesFromSequenceNumber(i);
        var boardValue = this.board[coordinates.row][coordinates.column];
        if(boardValue == -1)
            txt = txt + '<div class="grid-cell" id="gc_' + i + '"><img src="images/bomb.webp" /></div>';
        else
            txt = txt + '<div class="grid-cell clue-' + boardValue + '" id="gc_' + i + '"><span> ' + boardValue + '</span></div>';
    }
    return (txt);
}
































