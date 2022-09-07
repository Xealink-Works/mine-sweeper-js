describe('update-time-elapsed', function() {
    var minesweeper;
    beforeEach(function() {
        minesweeper = new Minesweeper();
        minesweeper.timeElapsed = 2;
    });

    it('should increment by 1', () => {
        var beforeTimeElapsed = minesweeper.timeElapsed;
        minesweeper.updateTimeElapsed();
        var expected = beforeTimeElapsed + 1;
        expect(minesweeper.timeElapsed).toBe(expected);
    })

})