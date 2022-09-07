describe('remove-class', function () {
    var target;
    var mineSweeper;
    beforeEach(function () {
        target = document.createElement('input');
        mineSweeper=new Minesweeper();
    });

    it('should remove a class "cls1" to the target having class="cls1"', () => {
        mineSweeper.removeClass(target, 'cls1');
        var className = target.className;
        expect(className).toBe('');
    });

    it('should remove a class "cls1" to the target having no class', () => {
        mineSweeper.removeClass(target, 'cls1');
        var className = target.className;
        expect(className).toBe('');
    });

    it('should remove a class "cls1" from the target having class="cls1 cls2"', () => {
        target.className='cls1 cls2'
        mineSweeper.removeClass(target, 'cls1');
        var className = target.className;
        expect(className).toBe('cls2');
    });
});