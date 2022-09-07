var _getCoordinatesFromSequenceNumber = function(sequenceNumber) {
    var i, j;
    columns = this.columns;
    rows = this.rows;
    i = Math.floor(sequenceNumber / columns);
    j = sequenceNumber % columns;
    return { row: i, column: j }
}