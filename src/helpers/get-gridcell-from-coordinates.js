var _getGridcellFromCoordinates = function(row, column) {
    var sequenceNumber = this.getSequenceNumberFromCoordinates(row, column);
    var id = 'gc_' + sequenceNumber;
    return document.getElementById(id);
}