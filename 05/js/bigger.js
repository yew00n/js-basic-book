var num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
var num2 = parseInt(prompt("비교할 두 번째 숫자: "));
findBigger(num1, num2);

function findBigger(a, b){
    if(a < b){
        alert(b + "(이)가 " + a + "보다 큽니다.");
    }
    else if (b > a){
        alert(a + "(이)가 " + b + "보다 큽니다.");
    }
    else alert(a + "와(과) " + b + "는 같습니다.")
}