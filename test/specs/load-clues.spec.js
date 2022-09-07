describe('loadClues', function () {
    var mineSweeper;
    beforeEach(function () {
        mineSweeper = new Minesweeper();
        mineSweeper.rows = 9;
        mineSweeper.columns = 9;
    });

    it('should load clue number in the entire board', function () {
        mineSweeper.board = [
            [-1, 0, 0, 0, 0, 0, 0, -1, 0],
            [0, -1, 0, 0, 0, 0, 0, -1, -1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, -1, 0, -1, 0, 0, 0],
            [-1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, -1, 0, 0, -1, 0],
            [0, -1, 0, 0, -1, 0, 0, 0, 0],
        ];

        mineSweeper.loadClues();

        var expectedBoard = [
            [-1, 2, 1, 0, 0, 0, 2, -1, 3],
            [2, -1, 1, 0, 0, 0, 2, -1, -1],
            [2, 2, 2, 0, 0, 0, 1, 2, 2],
            [1, -1, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 1, 1, 0, 0],
            [1, 1, 1, -1, 2, -1, 1, 0, 0],
            [-1, 1, 1, 2, 3, 2, 2, 1, 1],
            [2, 2, 1, 2, -1, 2 , 1, -1, 1],
            [1, -1, 1, 2, -1, 2, 1, 1, 1],
            ];

        expect(mineSweeper.board).toEqual(expectedBoard);
    });
})