describe('reveal (9 x 9 matrix)', function () {
   /**
    * Zero
    * Non-zero
    * Mine
    */

   var mineSweeper;
   var button;
   var cell;
   var container;

   describe('non-zero',()=>{
      beforeEach(function() {
         mineSweeper = new Minesweeper();
         mineSweeper.board=[[0,5],[0,0]];
         mineSweeper.rows=2;
         mineSweeper.columns=2;
         container = document.createElement('div');
   
         button = document.createElement('button');
         button.setAttribute('id', 'btn_01');
         container.append(button);
   
         cell = document.createElement('div');
         cell.setAttribute('id', 'gc_01');
         cell.innerText = 5;
         container.append(cell);

         document.body.append(container);
      });

      it('should hide the button when underneath cell has non-zero value', function () {

         mineSweeper.reveal( button );
         expect(button.className.indexOf('hide')).toBeGreaterThan(-1);
         
      });

      afterEach(function() {
         container.remove();
      })
   });


   describe('mine', function () {
      beforeEach(function () {
         container = document.createElement('div');
         mineSweeper = new Minesweeper();
         mineSweeper.board = [
            [0, -1, 0, 0],
            [-1, 0, 0, 0],
            [0, -1, 0, 0],
            [0, -1, 0, -1],
         ];
         mineSweeper.rows = 4;
         mineSweeper.columns = 4;

         for (var i = 0; i < 16; i++) {
            button = document.createElement('button');
            button.setAttribute('id', 'btn_'+ i);
            container.append(button);

            cell = document.createElement('div');
            cell.setAttribute('id', 'gc_'+ i);
            cell.innerText = mineSweeper.board[Math.floor(i/4)][i%4];
            container.append(cell);
         }
         document.body.append(container);
      });

      it('should explode all mines when underneath cell has a mine', function () {
         mineSweeper.reveal( document.getElementById('btn_1') );
         expect(document.getElementById('btn_1').className.indexOf('hide')).toBeGreaterThan(-1);
         expect(document.getElementById('btn_4').className.indexOf('hide')).toBeGreaterThan(-1);
         expect(document.getElementById('btn_9').className.indexOf('hide')).toBeGreaterThan(-1);
         expect(document.getElementById('btn_13').className.indexOf('hide')).toBeGreaterThan(-1);
         expect(document.getElementById('btn_15').className.indexOf('hide')).toBeGreaterThan(-1);
      });

      it('should indicate the initial mine with different background', function () {
         mineSweeper.reveal( document.getElementById('btn_1') );
         expect(document.getElementById('btn_1').className.indexOf('triggered')).toBeGreaterThan(-1);
      });      

      afterEach(function() {
         container.remove();
      })
   });


   // describe('zero', function () { 
   //    beforeEach(function () {
   //       container = document.createElement('div');
   //       mineSweeper = new Minesweeper();
   //       mineSweeper.board = [
   //          [0, 0, 0, 0],
   //          [1, 1, 1, 0],
   //          [2, -1, 3, 1],
   //          [2, -1, 3, -1],
   //       ];
   //       mineSweeper.rows = 4;
   //       mineSweeper.columns = 4;

   //       for (var i = 0; i < 16; i++) {
   //          button = document.createElement('button');
   //          button.setAttribute('id', 'btn_'+ i);
   //          container.append(button);

   //          cell = document.createElement('div');
   //          cell.setAttribute('id', 'gc_'+ i);
   //          cell.innerText = mineSweeper.board[Math.floor(i/4)][i%4];
   //          container.append(cell);
   //       }
   //       document.body.append(container);
   //       console.log(document);
   //    });      

   //    it('should reveal all surrounding zero mines including the one intiated with', function () {
   //       mineSweeper.reveal({ target: document.getElementById('btn_3') });
   //       expect(document.getElementById('btn_3').className.indexOf('hide')).toBeGreaterThan(-1);

   //       // btn_3
   //       expect(document.getElementById('btn_2').className.indexOf('hide')).toBeGreaterThan(-1);
   //       expect(document.getElementById('btn_6').className.indexOf('hide')).toBeGreaterThan(-1);
   //       expect(document.getElementById('btn_7').className.indexOf('hide')).toBeGreaterThan(-1);

   //       // btn_2
   //       expect(document.getElementById('btn_1').className.indexOf('hide')).toBeGreaterThan(-1);
   //       expect(document.getElementById('btn_5').className.indexOf('hide')).toBeGreaterThan(-1);

   //       // btn_6
   //       expect(document.getElementById('btn_10').className.indexOf('hide')).toBeGreaterThan(-1);
   //       expect(document.getElementById('btn_11').className.indexOf('hide')).toBeGreaterThan(-1);

   //       // btn_7
   //    });  
      
   //    afterEach(function() {
   //       container.remove();
   //    })      
   // });
});