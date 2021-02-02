const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const errorIconFN = firstNameInput.parentElement.children[1];
const errorLabelFN = firstNameInput.parentElement.children[2];

const errorIconLN = lastNameInput.parentElement.children[1];
const errorLabelLN = lastNameInput.parentElement.children[2];

const errorIconEmail = emailInput.parentElement.children[1];
const errorLabelEmail = emailInput.parentElement.children[2];

const errorIconPassword = passwordInput.parentElement.children[1];
const errorLabelPassword = passwordInput.parentElement.children[2];


document.getElementById("submitButton").addEventListener("click", (event)=>event.preventDefault());

function onFormSubmit (){
    if(!firstNameInput.value){
        firstNameInput.classList.add('wrongInput');
        errorIconFN.classList.add('visible');
        errorLabelFN.classList.add('visible');
    } else{
        firstNameInput.classList.remove('wrongInput');
        errorIconFN.classList.remove('visible');
        errorLabelFN.classList.remove('visible');
    }
    if(!lastNameInput.value){
        lastNameInput.classList.add('wrongInput');
        errorIconLN.classList.add('visible');
        errorLabelLN.classList.add('visible');
    } else{
        lastNameInput.classList.remove('wrongInput');
        errorIconLN.classList.remove('visible');
        errorLabelLN.classList.remove('visible');
    }
    if(!passwordInput.value){
        passwordInput.classList.add('wrongInput');
        errorIconPassword.classList.add('visible');
        errorLabelPassword.classList.add('visible');
    } else{
        passwordInput.classList.remove('wrongInput');
        errorIconPassword.classList.remove('visible');
        errorLabelPassword.classList.remove('visible');
    }
    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailInput.value.match(re)){
        emailInput.classList.add('wrongInput');
        errorIconEmail.classList.add('visible');
        errorLabelEmail.classList.add('visible');
    } else{
        emailInput.classList.remove('wrongInput');
        errorIconEmail.classList.remove('visible');
        errorLabelEmail.classList.remove('visible');
    }
}
