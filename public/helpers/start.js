var _start = function () {
    this.gameStatus = 'Started'; // 'Initiated'  /  / 'Completed'
    this.timeElapsed = 0;
    this.timeKeeper = setInterval(this.updateTimeElapsed.bind(this), 1000);
}