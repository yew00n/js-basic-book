var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");


function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("아이디는 4~15자리의 숫자 또는 영문이어야 합니다.");
        userId.select();
    }
}