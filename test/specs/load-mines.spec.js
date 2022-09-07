describe('load-mines', function () {
    var mineSweeper;

    describe('total mines - beginner (9 x 9 Board - 81 tiles - 10 mines)', function () {
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.board = new Array(9);
            mineSweeper.rows = 9;
            mineSweeper.columns = 9;
            mineSweeper.totalMines = 10;
            for (var i = 0; i < 9; i++) {
                mineSweeper.board[i] = new Array(9);
                for (var j = 0; j < 9; j++)
                    mineSweeper.board[i][j] = 0;
            }
             mineSweeper.loadMines();
        });

        it('should have 10 mines', function () {
            var totalMines = 0;
            mineSweeper.board.forEach(row => {
                totalMines += row.filter(cell => cell === -1).length;
            })
            expect(totalMines).toBe(10);
        });

        it('should have atleast 1 mine per row', function () {
            var rowsNotHavingAtleastOneMine = mineSweeper.
                board.filter(row => {
                    var minesPerRow = row.filter(cell => cell === -1).length;
                    return minesPerRow >= 1 ? false : true;
                })
            expect(rowsNotHavingAtleastOneMine.length).toBe(0);
        });
    });


    describe('total mines - beginner (16 x 16 Board - 256 tiles - 40 mines)', function () {
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.board = new Array(9);
            mineSweeper.rows = 16;
            mineSweeper.columns = 16;
            mineSweeper.totalMines = 40;
            for (var i = 0; i < 16; i++) {
                mineSweeper.board[i] = new Array(16);
                for (var j = 0; j < 16; j++)
                    mineSweeper.board[i][j] = 0;
            }
             mineSweeper.loadMines();
        });

        it('should have 40 mines', function () {
            var totalMines = 0;
            mineSweeper.board.forEach(row => {
                totalMines += row.filter(cell => cell === -1).length;
            })
            expect(totalMines).toBe(40);
        });

        it('should have atleast 2 mines per row', function () {
            var rowsNotHavingAtleastOneMine = mineSweeper.board.filter(row => {
                var minesPerRow = row.filter(cell => cell === -1).length;
                return minesPerRow >= 2 ? false : true;
            })
            expect(rowsNotHavingAtleastOneMine.length).toBe(0);
        });

        it('should have atmost 3 mines per row', function () {
            var rowsHavingMoreThan3Mines = mineSweeper.board.filter(row => {
                var minesPerRow = row.filter(cell => cell === -1).length;
                return minesPerRow <= 3 ? false : true;
            })
            expect(rowsHavingMoreThan3Mines.length).toBe(0);
        });
    });


    describe('total mines - beginner (30 x 16 Board - 480 tiles - 99 mines)', function () {
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.board = new Array(16);
            mineSweeper.rows = 16;
            mineSweeper.columns = 30;
            mineSweeper.totalMines = 99;
            for (var i = 0; i < 16; i++) {
                mineSweeper.board[i] = new Array(30);
                for (var j = 0; j < 16; j++)
                    mineSweeper.board[i][j] = 0;
            }
             mineSweeper.loadMines();
        });

        it('should have 99 mines', function () {
            var totalMines = 0;
            mineSweeper.board.forEach(row => {
                totalMines += row.filter(cell => cell === -1).length;
            })
            expect(totalMines).toBe(99);
        });

        it('should have atleast 6 mines per row', function () {
            var rowsNotHavingAtleastOneMine = mineSweeper.board.filter(row => {
                var minesPerRow = row.filter(cell => cell === -1).length;
                return minesPerRow >= 6 ? false : true;
            })
            expect(rowsNotHavingAtleastOneMine.length).toBe(0);
        });

        it('should have atmost 7 mines per row', function () {
            var rowsHavingMoreThan7Mines = mineSweeper.board.filter(row => {
                var minesPerRow = row.filter(cell => cell === -1).length;
                return minesPerRow <= 7 ? false : true;
            })
            expect(rowsHavingMoreThan7Mines.length).toBe(0);
        });
    });
});