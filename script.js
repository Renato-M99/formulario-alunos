// guardando elementos pelo Id usando o querySelector("#id");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

//Adicionando um evento ao formulário do tipo submit 
/* Lembre-se que como o evento é o do tipo sumbit iremos receber um event (event) do próprio submit */

form.addEventListener('submit', (event) => {
    event.preventDefault()
    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
});




function checkInputUserName() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, 'Preencha um nome de usuário!');
    } else {
        const formItem = username.parentElement;
        formItem.classList = 'form-content';
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha um e-mail válido");
    } else {
        const formItem = email.parentElement;
        formItem.classList = 'form-content';
    }

}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Preencha uma senha válida");


    } else if (passwordValue.lenght < 8) {
        errorInput(password, "A senha deve conter no mínimo 8 caracteres!");
    }
    else {
        const formItem = password.parentElement;
        formItem.classList = 'form-content';
    }

}

function checkInputPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordConfirmation === "") {
        errorInput(passwordConfirmation, "preencha uma senha!");

    } else if (passwordConfirmationValue.lenght < 8) {
        errorInput(passwordConfirmation, "A senha deve conter no mínimo 8 caracteres!");
    }
    else if (password.value == passwordConfirmation.value && password.value != 0) {
        alert("Sucesso!");
    } else if (password.value != passwordConfirmation.value) {
        errorInput(passwordConfirmation, "confirmação inválida");
    }
    else {
        const formItem = passwordConfirmation.parentElement;
        formItem.classList = 'form-content'
    }


}
/* 
function checkForm(){

    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    
} */


function errorInput(input, message) {

    //parentElement = seleciona o pai direto de um elemento.
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    //innerText = vai até o texto do elemento e altera para o conteúdo especificado
    textMessage.innerText = message;
    formItem.classList = 'form-content error';
}

//blur = representa a perda de foco do campo

email.addEventListener('blur', () => {
    checkInputEmail();
})

username.addEventListener('blur', () => {
    checkInputUserName();
})

password.addEventListener('blur', () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation();
})
