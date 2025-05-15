function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldValueParse = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueParse;
}
// Banking js

function updateTotalField(totalFieldId,amountValue){

    
    const totalElements = document.getElementById(totalFieldId);
    const totalInnerText = totalElements.innerText;
    const totalInnerTextParse = parseFloat(totalInnerText);

    const totalAmount = totalInnerTextParse + amountValue   ;
    totalElements.innerText = totalAmount;


}



function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);
    return balanceTotalInnerTextParse;
}



function updateBalance(amount , isAdd){

    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalInnerText = balanceTotal.innerText;
    // const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);

    const balanceTotalInnerTextParse = getCurrentBalance();
    
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalInnerTextParse + amount ;
    }
    else{
        balanceTotal.innerText = balanceTotalInnerTextParse - amount ;
    }

}



document.getElementById('deposit-button').addEventListener('click',function(){
   
 


    const depositInputFieldValueParse = getInputValue('deposit-input');
    if(depositInputFieldValueParse > 0){
        updateTotalField('deposit-total',depositInputFieldValueParse);
        updateBalance(depositInputFieldValueParse, true);
    }
    

});


document.getElementById('withdraw-button').addEventListener('click',function(){

     

    const withdrawInputFieldValueParse = getInputValue('withdraw-input')
    const withdrawOnlyCurrentBalance = getCurrentBalance();
    if(withdrawInputFieldValueParse > 0 && withdrawInputFieldValueParse < withdrawOnlyCurrentBalance){
        updateTotalField ('withdraw-total', withdrawInputFieldValueParse);
        updateBalance(withdrawInputFieldValueParse, false);
    }
    else if ( withdrawInputFieldValueParse > withdrawOnlyCurrentBalance ){
        alert('You cannot withdraw more than you have in your account Balance');
    }
    

});

