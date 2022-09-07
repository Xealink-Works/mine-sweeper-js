describe('start', function() {
    var minesweeper;
    beforeEach(function() {
        minesweeper = new Minesweeper();
    });

    it('should change the status of game to "Started"', () => {
        minesweeper.start();
        expect(minesweeper.gameStatus).toBe('Started');
    });

    it('should change initiate the timer to 0', () => {
        minesweeper.start();
        expect(minesweeper.timeElapsed).toBe(0);
    });


    // describe('test', () => {
    //     beforeEach(function() {
    //         jasmine.clock().install();
    //     });
    
    //     afterEach(function() {
    //         jasmine.clock().uninstall();
    //     });
  
    // });


})