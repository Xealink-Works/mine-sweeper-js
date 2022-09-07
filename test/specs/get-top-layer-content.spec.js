describe('getTopLayerContent', function () {
    var mineSweeper;
    


    describe('beginner mode (9 x 9 matrix)', function(){
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.rows = 9;
            mineSweeper.columns = 9;
        });

       it('should return a string having 81 buttonss', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var openTags = (buttons.match(/<button/g) || []).length;
            var closeTags = (buttons.match(/button>/g) || []).length;
            expect(openTags).toBe(81);
            expect(closeTags).toBe(81);
        });

        it('should return a string with 81 buttons having \'class="btn"\'', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/class="btn"/g) || []).length;
            expect(count).toBe(81);
        });

        it('should return a string with 81 buttons with id in the format of id="btn_\d{1,3}"', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/id="btn_\d{1,3}"/g) || []).length;
            expect(count).toBe(81);
        });
    });


    describe('beginner mode (16 x 16 matrix)', function(){
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.rows = 16;
            mineSweeper.columns = 16;
        });

        it('should return a string having 256 buttonss', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var openTags = (buttons.match(/<button/g) || []).length;
            var closeTags = (buttons.match(/button>/g) || []).length;
            expect(openTags).toBe(256);
            expect(closeTags).toBe(256);
        });

        it('should return a string with 256 buttons having \'class="btn"\'', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/class="btn"/g) || []).length;
            expect(count).toBe(256);
        });

        it('should return a string with 256 buttons with id in the format of id="btn_\d{1,3}"', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/id="btn_\d{1,3}"/g) || []).length;
            expect(count).toBe(256);
        });
    });


    describe('beginner mode (30 x 16 matrix)', function(){
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.rows = 16;
            mineSweeper.columns = 30;
        });

        it('should return a string having 480 buttonss', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var openTags = (buttons.match(/<button/g) || []).length;
            var closeTags = (buttons.match(/button>/g) || []).length;
            expect(openTags).toBe(480);
            expect(closeTags).toBe(480);
        });

        it('should return a string with 480 buttons having \'class="btn"\'', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/class="btn"/g) || []).length;
            expect(count).toBe(480);
        });

        it('should return a string with 480 buttons with id in the format of id="btn_\d{1,3}"', () => {
            var buttons = mineSweeper.getTopLayerContent();
            var count = (buttons.match(/id="btn_\d{1,3}"/g) || []).length;
            expect(count).toBe(480);
        });
    });


  

});