var _updateTimeElapsed = function () {
    this.timeElapsed = this.timeElapsed + 1;
    document.getElementById('timer').innerHTML = padd(this.timeElapsed, 4);

    function padd(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return (num);
    }    
}