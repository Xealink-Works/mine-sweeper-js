// Madhu
var _flag = function (event) {
    if(this.hasClass(event.target, 'flagged')) {
        this.removeClass(event.target, 'flagged')
        this.minesFlagged--;
    }
    else {
        this.addClass(event.target, 'flagged')
        this.minesFlagged++;
    }

    event.target.innerHTML = '<img src="images/flag.svg" />';

    var remainingMines = this.totalMines - this.minesFlagged;
    document.getElementById('counter').innerHTML = padd(remainingMines, 4);
    if(this.isGameCompleted()) this.endGame(true);

    function padd(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return (num);
    }       
}