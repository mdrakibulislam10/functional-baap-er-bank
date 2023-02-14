document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
1. get the element by id
2. get the value from the element
3. convert string value to a number
*/
  const newDepositAmount = getInputFieldValueById("deposit-field");
  if (isNaN(newDepositAmount) || newDepositAmount < 1) {
    return alert("please provide number above '0'");
  }

  // get previous deposit total by id
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance
  const previousBalanceTotal = getTextElementValueById("balance-total");
  // calculate new balance total
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
