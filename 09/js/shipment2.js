
var check = document.ship.shippingInfo;

check.addEventListener("click", function() {
    var nameInfo = document.querySelector("#billingName").value;
    var tellInfo = document.querySelector("#billingTel").value;
    var addrInfo = document.querySelector("#billingAddr").value;
    
    if (check.checked == true) {
        document.querySelector("#shippingName").value = nameInfo;
        document.querySelector("#shippingTel").value = tellInfo;
        document.querySelector("#shippingAddr").value = addrInfo;
    }
    else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";       
    }
})
