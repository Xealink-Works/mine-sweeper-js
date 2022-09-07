var _removeClass = function (target, className) {
    var temp = target.className;
    if (temp.indexOf(className) > -1)
        temp = temp.replace(className,'').trim();
    target.className=temp;
}


