// Rama
var _getAdjacentCellRefs = function (row, col) {
    var indexPositions = [];
    indexPositions.push([row - 1, col - 1]);
    indexPositions.push([row - 1, col]);
    indexPositions.push([row - 1, col + 1]);

    indexPositions.push([row, col - 1]);
    indexPositions.push([row, col + 1]);

    indexPositions.push([row + 1, col - 1]);
    indexPositions.push([row + 1, col]);
    indexPositions.push([row + 1, col + 1]);

    for (i = indexPositions.length - 1; i >= 0; i--) {
        if (indexPositions[i][0] < 0 || indexPositions[i][1] < 0 || indexPositions[i][0] >= this.rows || indexPositions[i][1] >= this.columns)
            indexPositions.splice(i, 1);
    }

    return indexPositions;
}
      