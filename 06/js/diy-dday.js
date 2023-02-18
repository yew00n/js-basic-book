var firstDay = new Date("2022-01-01");
var now = new Date();

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedDay = Math.round((toNow - toFirst)/ (24 * 60 * 60 * 1000));

document.querySelector("#accent").innerHTML = passedDay + "일";

function calcDate(days){
    var future = days*(24 * 60 * 60 * 1000) + toFirst;
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var day = someday.getDate();

    document.querySelector("#date" + days).innerHTML = year + "년" + month + "월" + day + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);