console.log(sumMulti(5, 10))
console.log(sumMulti(10,10))


function sumMulti(a, b) {
    if (a != b){
        result = a + b;
    }
    else{
        result = a * b;
    }
    return result;
}