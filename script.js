function verifyPassword() {
    const password = document.querySelector("#pwd");
    const confirmPassword = document.querySelector("#confirm-pwd");
    if (password.value !== confirmPassword.value) {
        password.className = "error";
        confirmPassword.className = "error";
    }
    const pwdErrorMsg = document.querySelector("#pwd-error-msg");
    pwdErrorMsg.style.display = "block";
    return password.value === confirmPassword.value;
}
