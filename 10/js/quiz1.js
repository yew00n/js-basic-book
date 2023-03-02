var button = document.querySelector("#container")

function openPop() {
    var newWin = window.open("current.html", "", "width=300, height=50");
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다.")
    }
}

window.onload = openPop;