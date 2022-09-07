describe('prepare', function () {
    describe('Beginner Mode', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.prepare('B')
        });

        it('should initialize number of columns', function () {
            expect(mineSweeper.columns).toBe(9);
        });

        it('should initialize number of rows', function () {
            expect(mineSweeper.rows).toBe(9);
        });

        it('should initialize number of mines', function () {
            expect(mineSweeper.totalMines).toBe(10);
        });

        it('should initialize number of tiles', function () {
            expect(mineSweeper.totalTiles).toBe(81);
        });

        it('should initialize mode', function () {
            expect(mineSweeper.mode).toBe('B');
        });

        it('should initialize gameStatus', function () {
            expect(mineSweeper.gameStatus).toBe('Initiated');
        });

        it('should initialize minesFlagged', function () {
            expect(mineSweeper.minesFlagged).toBe(0);
        });

        it('should initialize timeElapsed', function () {
            expect(mineSweeper.timeElapsed).toBe(0);
        });

        it('should initialize tilesRevealed', function () {
            expect(mineSweeper.tilesRevealed).toBe(0);
        });

        it('should build 2d matrix', function () {
            var expected = new Array(9);
            for (var i = 0; i < 9; i++)
                expected[i] = new Array(9)
            expect(mineSweeper.board).toEqual(expected);
        })
    });

    describe('Intermediate Mode', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.prepare('I')
        });

        it('should initialize number of columns', function () {
            expect(mineSweeper.columns).toBe(16);
        });

        it('should initialize number of rows', function () {
            expect(mineSweeper.rows).toBe(16);
        });

        it('should initialize number of mines', function () {
            expect(mineSweeper.totalMines).toBe(40);
        });

        it('should initialize number of tiles', function () {
            expect(mineSweeper.totalTiles).toBe(256);
        });

        it('should initialize mode', function () {
            expect(mineSweeper.mode).toBe('I');
        });

        it('should initialize gameStatus', function () {
            expect(mineSweeper.gameStatus).toBe('Initiated');
        });

        it('should initialize minesFlagged', function () {
            expect(mineSweeper.minesFlagged).toBe(0);
        });

        it('should initialize timeElapsed', function () {
            expect(mineSweeper.timeElapsed).toBe(0);
        });

        it('should initialize tilesRevealed', function () {
            expect(mineSweeper.tilesRevealed).toBe(0);
        });

        it('should build 2d matrix', function () {
            var expected = new Array(16);
            for (var i = 0; i < 16; i++)
                expected[i] = new Array(16)
            expect(mineSweeper.board).toEqual(expected);
        })

    });

    describe('Expert Mode', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.prepare('E')
        });

        it('should initialize number of columns', function () {
            expect(mineSweeper.columns).toBe(30);
        });

        it('should initialize number of rows', function () {
            expect(mineSweeper.rows).toBe(16);
        });

        it('should initialize number of mines', function () {
            expect(mineSweeper.totalMines).toBe(99);
        });

        it('should initialize number of tiles', function () {
            expect(mineSweeper.totalTiles).toBe(480);
        });

        it('should initialize mode', function () {
            expect(mineSweeper.mode).toBe('E');
        });

        it('should initialize gameStatus', function () {
            expect(mineSweeper.gameStatus).toBe('Initiated');
        });

        it('should initialize minesFlagged', function () {
            expect(mineSweeper.minesFlagged).toBe(0);
        });

        it('should initialize timeElapsed', function () {
            expect(mineSweeper.timeElapsed).toBe(0);
        });

        it('should initialize tilesRevealed', function () {
            expect(mineSweeper.tilesRevealed).toBe(0);
        });

        it('should build 2d matrix', function () {
            var expected = new Array(16);
            for (var i = 0; i < 16; i++)
                expected[i] = new Array(30);
            expect(mineSweeper.board).toEqual(expected);
        })

    });
})