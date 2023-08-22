// TODO: Make it so a password has to be 8 chars long and contain at least one number and one letter
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const match = document.querySelector("#match");
const submitBtn = document.querySelector(".create-account");
let passwordMatch = false;

passwordConfirm.addEventListener("keyup", (e) => {
    if(password.value !== passwordConfirm.value) {
        match.textContent = "*Passwords do not match";
        match.style.color = "red";
        password.style.border = "1px solid red";
        passwordConfirm.style.border = "1px solid red";
        passwordMatch = false;
    } else {
        match.textContent = "";
        password.style.border = "1px solid green";
        passwordConfirm.style.border = "1px solid green";
        passwordMatch = true;
    }
});

submitBtn.addEventListener("click", (e) => {
    if(!passwordMatch){
        e.preventDefault();
        match.textContent = "*Passwords do not match";
        match.style.color = "red";
    }
});