var _getTargetFromCoordinates = function(row, column) {
    var sequenceNumber = this.getSequenceNumberFromCoordinates(row, column);
    var id = 'btn_' + sequenceNumber;
    return document.getElementById(id);
}