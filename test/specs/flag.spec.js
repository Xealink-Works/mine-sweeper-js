describe('Flag/Unflag', function () {
    var target;
    var mineSweeper;

    var target;
    var mineSweeper;
    var spy;

    describe('invoke "addClass"', function() {
        beforeEach(function () {
            target = document.createElement('input');
            mineSweeper = new Minesweeper();
            spy = spyOn(mineSweeper, 'addClass');
        });
    
        it('should call addClass', () => {
            mineSweeper.flag({ target: target });
            expect(mineSweeper.addClass).toHaveBeenCalled();
        });
    
        it('should call addClass with parameter "flagged"', () => {
            mineSweeper.flag({ target: target });
            expect(mineSweeper.addClass).toHaveBeenCalledWith(target, 'flagged');
        });   
    });

    describe('result', function() {
        beforeEach(function () {
            target = document.createElement('input');
            mineSweeper = new Minesweeper();
        });        

        it('should add a class "flagged" to the target button if unflagged', () => {
            mineSweeper.flag({ target: target });
            var className = target.className;
            expect(className.indexOf('flagged')).toBeGreaterThan(-1);
        });   
        
        it('should remove the class "flagged" from the target button if flagged already', () => {
            target.className = 'flagged';
            mineSweeper.flag({ target: target });
            var className = target.className;
            expect(className.indexOf('flagged')).toBe(-1);
        });        
    
    })    
    
});