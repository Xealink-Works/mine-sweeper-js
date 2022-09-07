describe('add-class', function () {
    var target;
    var mineSweeper;
    beforeEach(function () {
        target = document.createElement('input');
        mineSweeper=new Minesweeper();
    });

    it('should add a class "cls1" to the target having no classes in the initial state', () => {
        mineSweeper.addClass(target, 'cls1');
        var className = target.className;
        expect(className).toBe('cls1');
    });

    it('should add a class "cls2" to the target having class "cls1"', () => {
        target.className = 'cls1';
        mineSweeper.addClass(target, 'cls2');
        var className = target.className;
        expect(className).toBe('cls1 cls2');
    });

    it('should not add a class "cls1" to the target having class "cls1"', () => {
        target.className = 'cls1';
        mineSweeper.addClass(target, 'cls1');
        var className = target.className;
        expect(className).toBe('cls1');
    });
});