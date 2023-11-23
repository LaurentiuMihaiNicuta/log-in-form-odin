const userPasswordInput = document.querySelector('input[name="user_password"]');
const userConfirmedPasswordInput = document.querySelector('input[name="user_confirm_password"]');
const userFirstNameInput = document.querySelector('input[name="first_name"]');
const userLastNameInput = document.querySelector('input[name="last_name"]');
const userEmailInput = document.querySelector('input[name="user_email"]');
const userPhoneInput = document.querySelector('input[name="user_phone"]');



const form = document.getElementById('form_container');
const submitButton = document.getElementById('submit_button');
const completeError = document.getElementsByClassName('error-pop');

const passwordError = document.getElementById('password_pop');
const confirmedPasswordError = document.getElementById('confirmed_password_pop');



let inputs = [userFirstNameInput, userLastNameInput, userEmailInput, userPhoneInput, userPasswordInput, userConfirmedPasswordInput];
let inputIsEmpty = true;
let samePasswords = false;

let hasNumbers = false;
let hasSpecialCharacters = false;
let hasUpperCases = false;


function passwordCheck(password){
    if (checkNumbers(password) && checkSpecialCharacter(password) && checkUpperCase(password)) 
     return true;
}

function checkNumbers(password){
    return /.*\d.*/.test(password);
}

function checkSpecialCharacter(password){
    return /\W/.test(password);
}

function checkUpperCase(password){
    return /[A-Z]/.test(password);
}

function checkForNullness(input){
    if(input.value === null ){
        inputIsEmpty = false;
    }else{
        inputIsEmpty = true;
    }
}



userPasswordInput.addEventListener("input", function(){
    passwordError.textContent = "You need  to use upperCases for your password!";
    passwordError.style.display = 'block';
    if(checkUpperCase(userPasswordInput.value)){
        hasUpperCases = true;
        console.log("are uppercaseuri");
        passwordError.textContent = "You need  to use numbers for your password!";
    }
    if(checkNumbers(userPasswordInput.value)){
        hasNumbers = true;
        console.log("are numere");
        passwordError.textContent = "You need  to use specialCharacters for your password!";
    }
    if(checkSpecialCharacter(userPasswordInput.value)){
        hasSpecialCharacters = true;
        console.log("are caractere speciale")
        passwordError.textContent = "Everything is all right";
    }
});

userConfirmedPasswordInput.addEventListener("input", function(){
    passwordError.style.display = 'none';


    if(userConfirmedPasswordInput.value == userPasswordInput.value){
        confirmedPasswordError.textContent = "Everything is all right"
        console.log("Parolele Sunt i dentice")
        samePasswords = true;
        console.log(samePasswords);

    }else{
        confirmedPasswordError.style.display = 'block';
        console.log("Parolele nu sunt identice")
        samePasswords = false; 
    }
});


form.addEventListener('submit', function(event) {
    event.preventDefault();

    let allFieldsFilled = true;

    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            completeError[index].style.display = 'inline';
            allFieldsFilled = false;
        } else {
            completeError[index].style.display = 'none';
        }
    });

    if (!allFieldsFilled) {
        
        return;
    }

    if (!passwordCheck(userPasswordInput.value)){
        return;
    }

    if (userPasswordInput.value !== userConfirmedPasswordInput.value) {
       
        console.log("Parolele nu sunt identice");
        return;
    }


    form.submit();
});