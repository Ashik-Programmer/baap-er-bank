document.getElementById('btn-deposit').addEventListener('click', function () {
    // get user input value
    const depositField = document.getElementById('deposit-field');
    const deposit = parseFloat(depositField.value);

    // clear field
    depositField.value = '';

    if (isNaN(withdrawField)) {
        return;
    }


    // get befor deposit value
    const updateDeposit = document.getElementById('update-deposit');
    const update = parseFloat(updateDeposit.innerText);

    // update amount
    updateDeposit.innerText = update + deposit;

    // current balance
    const currentBalance = document.getElementById('current-balance');
    const balance = parseFloat(currentBalance.innerText);

    // set current balance
    currentBalance.innerText = balance + deposit;
    // console.log(balance);
})