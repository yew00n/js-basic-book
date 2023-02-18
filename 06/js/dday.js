var now = new Date();
var firstDay = new Date("2018-03-23");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow -toFirst;

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));
document.querySelector("#accent").innerText = passedDay + "일";


function calcDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";    
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

/*
// 100일 날짜 구하기
var future = toFirst + 100 * (1000 * 60 * 60 * 24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth();
var date = someday.getDate();
document.querySelector("#date100").innerText = year + "년" + month + "월" + date + "일";

// 200일 날짜 구하기
var future = toFirst + 200 * (1000 * 60 * 60 * 24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth();
var date = someday.getDate();
document.querySelector("#date200").innerText = year + "년" + month + "월" + date + "일";

// 1년 날짜 구하기
var future = toFirst + 365 * (1000 * 60 * 60 * 24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth();
var date = someday.getDate();
document.querySelector("#date365").innerText = year + "년" + month + "월" + date + "일";

// 500일 날짜 구하기
var future = toFirst + 500 * (1000 * 60 * 60 * 24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth();
var date = someday.getDate();
document.querySelector("#date500").innerText = year + "년" + month + "월" + date + "일";
*/