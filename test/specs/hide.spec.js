describe('Hide', function () {
    var target;
    var mineSweeper;
    var spy;
    beforeEach(function () {
        target = document.createElement('input');
        mineSweeper = new Minesweeper();
        spy = spyOn(mineSweeper, 'addClass');
    });

    it('should call addClass with parameter "hide"', () => {
        mineSweeper.hide({ target: target });
        expect(mineSweeper.addClass).toHaveBeenCalled();
    });

    it('should call addClass with parameter "hide"', () => {
        mineSweeper.hide({ target: target });
        expect(mineSweeper.addClass).toHaveBeenCalledWith(target, 'hide');
    });
});