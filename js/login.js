document.getElementById('btn-submit').addEventListener('click', function () {
    const userEamil = document.getElementById('user-eamil');
    const email = userEamil.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email === 'ashik@bank.com' && password === '123456') {
        location.href = "bank.html";
    }
    else {
        alert('invalid user');
    }
})