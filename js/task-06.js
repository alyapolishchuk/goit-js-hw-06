const input = document.querySelector('#validation-input');
const inputLenght = Number(input.getAttribute('data-length'));
console.log(inputLenght);

input.addEventListener("blur", () => {
if (input.value.length === inputLenght) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    return; 
}
input.classList.add('invalid');
input.classList.remove('valid');
})
