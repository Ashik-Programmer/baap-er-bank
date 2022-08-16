document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get user input value
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawField.value);

    // clear field
    withdrawField.value = '';

    if (isNaN(withdrawField)) {
        return;
    }

    // current balance
    const currentBalance = document.getElementById('current-balance');
    const balance = parseFloat(currentBalance.innerText);

    if (withdraw > balance) {
        alert('Your Insufficient Balance');
        return;
    }

    // get befor withdraw value
    const updateWithdraw = document.getElementById('update-withdraw');
    const update = parseFloat(updateWithdraw.innerText);

    // set the withdraw value
    updateWithdraw.innerText = update + withdraw;

    // set current balance
    currentBalance.innerText = balance - withdraw;


})