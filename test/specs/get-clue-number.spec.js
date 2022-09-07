describe('getClueNumber', function () {
    var mineSweeper;
    beforeEach(function () {
        mineSweeper = new Minesweeper();
    });

    it('should return 0 if no mines are available in adjacent locations', function () {
        mineSweeper.board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        var minesCount = mineSweeper.getClueNumber(1, 1);
        expect(minesCount).toBe(0);
    })

    it('should return 5 if 5 mines are available in adjacent locations', function () {
        mineSweeper.board = [
            [0, 0, -1, 0, 0, 0, 0, 0, 0],
            [-1, 0, -1, 0, 0, 0, 0, 0, 0],
            [-1, 0, -1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        mineSweeper.rows = 9;
        mineSweeper.columns = 9;
        var minesCount = mineSweeper.getClueNumber(1, 1);
        expect(minesCount).toBe(5);
    })

    it('should return 8 if 8 mines are available in adjacent locations', function () {
        mineSweeper.board = [
            [-1, -1, -1, 0, 0, 0, 0, 0, 0],
            [-1, 0, -1, 0, 0, 0, 0, 0, 0],
            [-1, -1, -1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        mineSweeper.rows = 9;
        mineSweeper.columns = 9;
        var minesCount = mineSweeper.getClueNumber(1, 1);
        expect(minesCount).toBe(8);
    })
});