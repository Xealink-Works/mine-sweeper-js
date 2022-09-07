describe('getAdjacentCellRefs (9 x 9 matrix)', function () {
    describe('corners', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.columns = 9;
            mineSweeper.rows = 9;
        });

        it('should return 3 references for top left corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(0, 0);
            var expectedCells = [[0, 1], [1, 0], [1, 1]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 3 references for top right corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(0, 8);
            var expectedCells = [[0, 7], [1, 7], [1, 8]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 3 references for bottom left corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(8, 0);
            var expectedCells = [[7, 0], [7, 1], [8, 1]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 3 references for bottom right corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(8, 8);
            var expectedCells = [[7, 7], [7, 8], [8, 7]];
            expect(adjacentCells).toEqual(expectedCells);
        });
    });

    describe('edge cells', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.columns = 9;
            mineSweeper.rows = 9;
        });

        it('should return 5 references for left edge', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(1, 0);
            var expectedCells = [[0, 0], [0, 1], [1, 1], [2, 0], [2, 1]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 5 references for right edge', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(1, 8);
            var expectedCells = [[0, 7], [0, 8], [1, 7], [2, 7], [2, 8]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 5 references for top edge', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(0, 7);
            var expectedCells = [[0, 6], [0, 8], [1, 6], [1, 7], [1, 8]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 5 references for bottom edge', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(8, 7);
            var expectedCells = [[7, 6], [7, 7], [7, 8], [8, 6], [8, 8]];
            expect(adjacentCells).toEqual(expectedCells);
        });
    })

    describe('other', function () {
        var mineSweeper;
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.columns = 9;
            mineSweeper.rows = 9;
        });      

        it('should return 8 references for cell other than edge and corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(7, 7);
            var expectedCells = [[6, 6], [6, 7], [6, 8], [7, 6], [7, 8], [8, 6], [8, 7], [8, 8]];
            expect(adjacentCells).toEqual(expectedCells);
        });

        it('should return 8 references for cell other than edge and corner', function () {
            var adjacentCells = mineSweeper.getAdjacentCellRefs(1, 2);
            var expectedCells = [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [2, 1], [2, 2], [2, 3]];
            expect(adjacentCells).toEqual(expectedCells);
        });
    })
});