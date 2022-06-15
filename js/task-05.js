const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', () => {
    if (input.value === "") {
        return span.textContent = "Anonymous";
    }
return span.textContent = input.value;
});