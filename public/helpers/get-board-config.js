// Sandeep
var _getBoardConfig = function (mode) { // mode = 'B' | 'I' | 'E'

    var beginner = {
        rows: 9,
        columns: 9,
        minesCount: 10
    };

    var intermediate = {
        rows: 16,
        columns: 16,
        minesCount: 40
    };

    var expert = {
        rows: 16,
        columns: 30,
        minesCount: 99
    };

    if (mode === 'B')
        return beginner;
    else if (mode === 'I')
        return intermediate;
    else
        return expert;
}



