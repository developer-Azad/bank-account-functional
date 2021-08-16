
// function doubleIt(num){
//   const result = num * 2;
//   return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);


function getInputValue(){
const depositeInput = document.getElementById
('deposite-input');
const depositeAmountText = depositeInput.value;
const depositeAmount = parseFloat(depositeAmountText);
// clear input field 
depositeInput.value = '';
return depositeAmount;
}




// deposite section
document.getElementById('deposite-button').
addEventListener('click', function(){
// const depositeInput = document.getElementById
// ('deposite-input');
// const depositeAmountText = depositeInput.value;
// const depositeAmount = parseFloat(depositeAmountText);
const depositeAmount = getInputValue();

// get current depositeTotal
const depositeTotal = document.getElementById
('deposite-total');
 const depositeTotalText = parseFloat(newdepositeTotal.innerText);

newdepositeTotal.innerText = (depositeAmount + 
depositeTotalText);
// update balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal + depositeAmount;

})
// widthdraw section
document.getElementById('widthdraw-button').
addEventListener('click', function(){
const widthdrawInput = document.getElementById
('widthdraw-input');
const widthdrawAmount = parseFloat(widthdrawInput.value);

// get current widthdrawTotal
const newWidthdrawTotal = document.getElementById
('widthdraw-total');
 const widthdrawTotalText = parseFloat(newWidthdrawTotal.innerText);
newWidthdrawTotal.innerText = (widthdrawAmount + 
widthdrawTotalText);
// update balance 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
// if(widthdrawTotalText <= previousBalanceTotal){
balanceTotal.innerText = previousBalanceTotal - widthdrawAmount;
// }

// clear input field 
widthdrawInput.value = '';
})