// Madhav
var _loadMines = function () {
    var rows = this.rows;
    var columns = this.columns;
    var minesCount = this.totalMines;
    var minimumMinesPerRow = Math.floor(minesCount / rows);
    var leftOver = minesCount - (minimumMinesPerRow * rows);

    // placeing mines in row --sigment 1
    for (var i = 0; i < rows; i++) {
        loadMinesInRow(this.board[i], minimumMinesPerRow);
    }

    //   sigment 2
    var selectingRows = Math.floor(rows / leftOver);
    var i = 0;
    var r;
    do {
        r = rand123(0, selectingRows);
        r = r + i;
        loadMinesInRow(this.board[r], 1);
        leftOver--;
        i += selectingRows;
    } while (leftOver > 0)


    function rand123(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function indexOfGivenSpecificValueInArray(array, valueInArray) {
        var index;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === valueInArray)
                index = i;
        }
        return index;
    }

    function loadMinesInRow(arrayRow, bombCount) {
        var bombPosition = 0;
        tempRow = [];
        for (var i = 0; i < arrayRow.length; i++) {
            if (arrayRow[i] !== -1)
                tempRow.push(i);
        }
        for (var i = bombCount - 1; i >= 0; i--) {
            var r = rand123(0, tempRow.length);
            bombPosition = tempRow[r];
            arrayRow[bombPosition] = -1;
            tempRow.splice(indexOfGivenSpecificValueInArray(tempRow, bombPosition), 1);
        }
        return tempRow;
    }
    return this.board;
}