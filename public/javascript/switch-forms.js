const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");

const signupBtn = document.querySelector("#btn-signup");
const loginBtn = document.querySelector("#btn-login");

signupForm.style.display = 'none';

function showSignupForm(event) {

    loginForm.style.display = 'none';
    signupForm.style.display = '';
}

function showLoginForm(event){
    loginForm.style.display = '';
    signupForm.style.display = 'none';
}

signupBtn.addEventListener("click",showSignupForm);
loginBtn.addEventListener("click",showLoginForm);

