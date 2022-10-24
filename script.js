function verifyPassword() {
    const password = document.querySelector("#pwd");
    const confirmPassword = document.querySelector("#confirm-pwd");
    if (password.value !== confirmPassword.value) {
        password.style.border = "1.5px solid #ff5353";
        confirmPassword.style.border = "1.5px solid #ff5353";
    }
    const pwdErrorMsg = document.querySelector("#pwd-error-msg");
    pwdErrorMsg.style.display = "block";
    return password.value === confirmPassword.value;
}
