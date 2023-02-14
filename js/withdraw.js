// event handler
document.getElementById("btn-withdraw").addEventListener("click", function () {
    // get input field value
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    if (isNaN(newWithdrawAmount)) {
        return alert("please provide number");
    }

    // get withdraw total inner text
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");

    // get balance total inner text
    const previousBalanceTotal = getTextElementValueById("balance-total");

    if (newWithdrawAmount <= previousBalanceTotal) {
        // calculation and set new withdraw total
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        setTextElementValueById("withdraw-total", newWithdrawTotal);

        // calculation and set new balance total
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById("balance-total", newBalanceTotal)
    }
    else {
        alert("please input number lower than balance");
    }
});