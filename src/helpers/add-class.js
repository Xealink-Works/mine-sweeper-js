var _addClass = function(target,className) {
    var temp = target.className;
    if (temp !== '')
        if (this.hasClass(target, className))
            temp = target.className;
        else
            temp = target.className +' '+ className;
    else
        temp = className;
    target.className=temp;
}
    
