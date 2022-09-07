describe('getMinesCount', function() {
    var mineSweeper;

    describe('Beginner', function() {
        beforeEach(function() {
            mineSweeper = new Minesweeper();
        });
    
        it('it should return 9 columns', function() {
            var config = mineSweeper.getBoardConfig('B')
            expect(config.columns).toBe(9);
        });

        it('it should return 9 rows', function() {
            var config = mineSweeper.getBoardConfig('B')
            expect(config.rows).toBe(9);
        });

        it('it should return 10 mines', function() {
            var config = mineSweeper.getBoardConfig('B')
            expect(config.minesCount).toBe(10);
        });
    });

    describe('Intermediate', function() {
        beforeEach(function() {
            mineSweeper = new Minesweeper();
        });
    
        it('it should return 16 columns', function() {
            var config = mineSweeper.getBoardConfig('I')
            expect(config.columns).toBe(16);
        });

        it('it should return 16 rows', function() {
            var config = mineSweeper.getBoardConfig('I')
            expect(config.rows).toBe(16);
        });

        it('it should return 40 mines', function() {
            var config = mineSweeper.getBoardConfig('I')
            expect(config.minesCount).toBe(40);
        });
    });

    describe('Advanced', function() {
        beforeEach(function() {
            mineSweeper = new Minesweeper();
        });
    
        it('it should return 30 columns', function() {
            var config = mineSweeper.getBoardConfig('E')
            expect(config.columns).toBe(30);
        });

        it('it should return 16 rows', function() {
            var config = mineSweeper.getBoardConfig('E')
            expect(config.rows).toBe(16);
        });

        it('it should return 99 mines', function() {
            var config = mineSweeper.getBoardConfig('E')
            expect(config.minesCount).toBe(99);
        });
    });
});