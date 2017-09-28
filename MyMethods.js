function dateToStr(date) {
    var ret="{day=";
    ret+=date.getDate();
    ret+=",month=";
    ret+=date.getMonth()+1;
    ret+=",year=";
    ret+=date.getFullYear();
    ret+="}";
    return ret;
}


function getPreviousDate(date) {
    date.setDate(date.getDate()-1);
    return date;
}

