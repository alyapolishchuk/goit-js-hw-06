const form = document.querySelector('.login-form');

form.addEventListener('submit', funk);

function funk(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email}, Password: ${password}`);
}

function reset() {
  form.email = '';
  form.password = '';
}
