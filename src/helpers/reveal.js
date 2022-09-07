
var _reveal = function (target) {
    if(this.gameStatus === 'Initiated') this.start();
    var id = target.getAttribute('id');
    id = id.replace('btn_', '');
    id = parseInt(id);
    var targetCoordinates = this.getCoordinatesFromSequenceNumber(id);

    if (this.board[targetCoordinates.row][targetCoordinates.column] > 0) {
        this.addClass(target, 'hide');
        if(this.isGameCompleted()) this.endGame();
    }
    else if (this.board[targetCoordinates.row][targetCoordinates.column] === -1) {
        var gridCell = this.getGridcellFromCoordinates(targetCoordinates.row, targetCoordinates.column);
        this.addClass(gridCell, 'triggered');
        for (i = 0; i < this.rows; i++) {
            for (j = 0; j < this.columns; j++) {
                if (this.board[i][j] === -1) {
                    var target = this.getTargetFromCoordinates(i,j);
                    if(this.hasClass(target,'flagged') === false)
                        this.addClass(target, 'hide');
                }
            }
        }
        this.endGame(false);
    }

    else if (this.board[targetCoordinates.row][targetCoordinates.column] === 0) {
        this.addClass(target, 'hide marked');
        var adjacentCells = this.getAdjacentCellRefs(targetCoordinates.row, targetCoordinates.column);

        for(var i = adjacentCells.length - 1; i >= 0; i--) {
            var r = adjacentCells[i][0];
            var c = adjacentCells[i][1];
            var surroundingTarget = this.getTargetFromCoordinates(r,c);
            if(this.hasClass(surroundingTarget, 'marked') === true)
                adjacentCells.splice(i, 1);
        }

        for(var i = 0; i < adjacentCells.length; i++) {
            var r = adjacentCells[i][0];
            var c = adjacentCells[i][1];
            var clueNumber = this.board[r][c];
            var surroundingTarget = this.getTargetFromCoordinates(r,c);
            this.addClass(surroundingTarget, 'marked');

            if (clueNumber === -1) continue;
            if (clueNumber === 0) {
                this.reveal(surroundingTarget);
            }
            else
                this.addClass(surroundingTarget, 'hide');             
        }
        if(this.isGameCompleted()) this.endGame(true);
    }
}
