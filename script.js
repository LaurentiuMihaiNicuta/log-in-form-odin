let userPasswordInput = document.querySelector('input[name="user_password"]');
let userConfirmedPasswordInput = document.querySelector('input[name="user_confirm_password"]');




function passwordCheck(password){
    if (checkNumbers(password) && checkSpecialCharacter(password) && checkUpperCase(password)) {
        return "Parola e buna";
    } else {
        return "Parola e proasta";
    }
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

userPasswordInput.addEventListener("input", function(){
    console.log(passwordCheck(userPasswordInput.value));
});

userConfirmedPasswordInput.addEventListener("input", function(){
    if(userConfirmedPasswordInput.value == userPasswordInput.value){
        console.log("E totu ok")
    }
});

