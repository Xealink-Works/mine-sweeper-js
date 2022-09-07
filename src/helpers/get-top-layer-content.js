// Sandeep
var _getTopLayerContent = function (a, b) {
    a = this.rows, b = this.columns;
    var totalTiles = a * b;
    var txt = '';
    for (var i = 0; i < totalTiles; i++) {
        txt = txt + '<div class="btn"\  id="btn_' + i + '" onclick="clickHandler(event)" > &nbsp;</div>';
    }
    return (txt);

    // function padd(num, size) {

    //     num = num.toString();
    //     while (num.length < size) num = "0" + num;
    //     return (num);
    // }
} 