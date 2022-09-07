describe('isFlagged', function() { 
    var target;
    var mineSweeper;

    describe('invoke "hasClass"', function() { 
        beforeEach(function () {
            target = document.createElement('input');
            mineSweeper = new Minesweeper();
            spy = spyOn(mineSweeper, 'hasClass');
        });
    
        it('should call', () => {
            mineSweeper.flag({ target: target });
            expect(mineSweeper.hasClass).toHaveBeenCalled();
        });
    
        it('should call with parameter "flagged"', () => {
            mineSweeper.flag({ target: target });
            expect(mineSweeper.hasClass).toHaveBeenCalledWith(target, 'flagged');
        });
    });


    describe('result', ()=>{
        beforeEach(function () {
            target = document.createElement('input');
            mineSweeper = new Minesweeper();
        });        

        it('should return true when flagged', function() {
            target.className = 'cls1 flagged';
            expect(mineSweeper.isFlagged(target)).toBe(true);
        })
    
        it('should return false when not flagged', function() {
            expect(mineSweeper.isFlagged(target)).toBe(false);
        })    
    
    })


});