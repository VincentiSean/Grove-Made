function validation() {
    let email = document.emailForm.emailInput.value;
    console.log(email);

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email) === false) {
        let error = 'Please enter a valid email address';
        document.getElementById('formErrors').innerHTML = error;
    } else {
        let error = "";
        document.getElementById('formErrors').innerHTML = error;
    }
}