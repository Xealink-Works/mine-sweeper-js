describe('has-class', function () {
    var target;
    beforeEach(function () {
        target = document.createElement('input');
        mineSweeper=new Minesweeper();
    });

    it('should return true for the button having class="cls1"', () => {
        target.className = 'cls1';
        var isExists = mineSweeper.hasClass(target, 'cls1');
        expect(isExists).toBe(true);
    });

    it('should return false for the button having class="cls2"', () => {
        target.className = 'cls2';
        var isExists = mineSweeper.hasClass(target, 'cls1');
        expect(isExists).toBe(false);
    });

    it('should return false for the button having class=""', () => {
        var isExists = mineSweeper.hasClass(target, 'cls1');
        expect(isExists).toBe(false);
    });
});