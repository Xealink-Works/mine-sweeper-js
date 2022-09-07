var _isGameCompleted = function () {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            if (this.board[i][j] !== -1) {
                var target = this.getTargetFromCoordinates(i,j);
                if(this.hasClass(target, 'hide') === false)
                    return false;
            }
        }
    }
    return true;
}