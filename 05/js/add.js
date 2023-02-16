num1 = parseInt(prompt("첫번째 값을 입력하시오: "));
num2 = parseInt(prompt("두번째 값을 입력하시오: "));
document.write(add(num1, num2));


function add(a, b){
    var result = a + b;

    return result;
}