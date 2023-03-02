var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function() {
    if (check.checked == true) {
        document.querySelector("#shipppingName").value
        = document.querySelector("#billingName");
        document.querySelector("#shipppingTel").value
        = document.querySelector("#billingTel");
        document.querySelector("#shipppingAddr").value
        = document.querySelector("#billingAddr")
    }
});