// Rama
var _getClueNumber = function (rows,columns) { 
   var counter=0;
   var refs_indices= this.getAdjacentCellRefs(rows,columns);
 
   for(var i=0;i<refs_indices.length;i++){
        var r=refs_indices[i][0];
        var c= refs_indices[i][1];
        if(this.board[r][c] === -1)
            counter++;
   }
   return counter;
}