// Rama
var _loadClues =  function(){
    for (var i = 0; i < this.rows; i++) {

        for (var j = 0; j < this.columns; j++) {
            if (this.board[i][j] === -1)
                continue;
        
            this.board[i][j] = this.getClueNumber(i, j);
        }
    }
    
  
}