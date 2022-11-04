function verifyPassword() {
    const password = document.querySelector("#pwd");
    const confirmPassword = document.querySelector("#confirm-pwd");
    const pwdErrorMsg = document.querySelector(".pwd-error-msg");
    if (password.value !== confirmPassword.value) {
        password.className = "error";
        confirmPassword.className = "error";
        pwdErrorMsg.style.display = "block";
    }
    return password.value === confirmPassword.value;
}
