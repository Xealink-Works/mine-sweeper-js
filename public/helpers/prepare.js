// Sandeep
var _prepare = function (mode) {
    var config = this.getBoardConfig(mode);
    this.rows = config.rows;
    this.columns = config.columns;
    this.totalTiles = config.rows * config.columns;
    this.totalMines = config.minesCount;
    this.mode = mode; //'B'; // 'B' | 'I' | 'E';
    this.gameStatus = 'Initiated'; // 'Initiated' / 'Started' / 'Completed'
    this.minesFlagged = 0;
    this.timeElapsed = 0;
    this.tilesRevealed = 0;

    this.board = new Array(config.rows);
    for (var i = 0; i < config.rows; i++) {
        this.board[i] = new Array(config.columns);
    }
}