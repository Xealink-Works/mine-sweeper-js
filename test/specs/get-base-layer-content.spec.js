describe('getBaseLayerContent', function () {
    var mineSweeper;
    


    describe('beginner mode (9 x 9 matrix)', function(){
        beforeEach(function () {
            mineSweeper = new Minesweeper();
            mineSweeper.rows = 9;
            mineSweeper.columns = 9;
            mineSweeper.board = [
                [-1, 2, 1, 0, 0, 0, 2, -1, 3],
                [2, -1, 1, 0, 0, 0, 2, -1, -1],
                [2, 2, 2, 0, 0, 0, 1, 2, 2],
                [1, -1, 1, 0, 0, 0, 0, 0, 0],
                [1, 1, 2, 1, 2, 1, 1, 0, 0],
                [1, 1, 1, -1, 2, -1, 1, 0, 0],
                [-1, 1, 1, 2, 3, 2, 2, 1, 1],
                [2, 2, 1, 2, -1, 2 , 1, -1, 1],
                [1, -1, 1, 2, -1, 2, 1, 1, 1]                
            ];
        });

        it('should return a string having 81 divs', () => {
            var divs = mineSweeper.getBaseLayerContent();
            var openTags = (divs.match(/<div/g) || []).length;
            var closeTags = (divs.match(/div>/g) || []).length;
            expect(openTags).toBe(81);
            expect(closeTags).toBe(81);
        });

       it('should return a string with 81 divs having \'class="grid-cell"\'', () => {
            var divs = mineSweeper.getBaseLayerContent();
            var count = (divs.match(/class="grid-cell"/g) || []).length;
            expect(count).toBe(81);
        });

       it('should return a string with 81 divs with id in the format of id="gc_\d{1,3}"', () => {
            var divs = mineSweeper.getBaseLayerContent();
            var count = (divs.match(/id="gc_\d{1,3}"/g) || []).length;
            expect(count).toBe(81);
        });
    });


    // describe('intermediate mode (16 x 16 matrix)', function(){
    //     beforeEach(function () {
    //         mineSweeper = new Minesweeper();
    //         mineSweeper.rows = 16;
    //         mineSweeper.columns = 16;
    //         mineSweeper.board = [
    //             [-1, 2, 1, 0, 0, 0, 2, -1, 3],
    //             [2, -1, 1, 0, 0, 0, 2, -1, -1],
    //             [2, 2, 2, 0, 0, 0, 1, 2, 2],
    //             [1, -1, 1, 0, 0, 0, 0, 0, 0],
    //             [1, 1, 2, 1, 2, 1, 1, 0, 0],
    //             [1, 1, 1, -1, 2, -1, 1, 0, 0],
    //             [-1, 1, 1, 2, 3, 2, 2, 1, 1],
    //             [2, 2, 1, 2, -1, 2 , 1, -1, 1],
    //             [1, -1, 1, 2, -1, 2, 1, 1, 1]                
    //         ];            
    //     });

    //     it('should return a string having 256 divs', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var openTags = (divs.match(/<div/g) || []).length;
    //         var closeTags = (divs.match(/div>/g) || []).length;
    //         expect(openTags).toBe(256);
    //         expect(closeTags).toBe(256);
    //     });

    //     it('should return a string with 256 divs having \'class="grid-cell"\'', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var count = (divs.match(/class="grid-cell"/g) || []).length;
    //         expect(count).toBe(256);
    //     });

    //     it('should return a string with 256 divs with id in the format of id="gc_\d{1,3}"', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var count = (divs.match(/id="gc_\d{1,3}"/g) || []).length;
    //         expect(count).toBe(256);
    //     });
    // });

    // describe('expect mode (16 x 30 matrix)', function(){
    //     beforeEach(function () {
    //         mineSweeper = new Minesweeper();
    //         mineSweeper.rows = 16;
    //         mineSweeper.columns = 30;
    //     });

    //     it('should return a string having 480 divs', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var openTags = (divs.match(/<div/g) || []).length;
    //         var closeTags = (divs.match(/div>/g) || []).length;
    //         expect(openTags).toBe(480);
    //         expect(closeTags).toBe(480);
    //     });

    //     it('should return a string with 480 divs having \'class="grid-cell"\'', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var count = (divs.match(/class="grid-cell"/g) || []).length;
    //         expect(count).toBe(480);
    //     });

    //     it('should return a string with 480 divs with id in the format of id="gc_\d{1,3}"', () => {
    //         var divs = mineSweeper.getBaseLayerContent();
    //         var count = (divs.match(/id="gc_\d{1,3}"/g) || []).length;
    //         expect(count).toBe(480);
    //     });
    // });

});