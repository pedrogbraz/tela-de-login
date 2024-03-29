const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const spanStrength = document.getElementById('sp');
const passwordStrengthP1 = document.getElementById('p1');
const passwordStrengthP2 = document.getElementById('p2');
const passwordStrengthP3 = document.getElementById('p3');
const loginButton = document.getElementById('login');
const createButton = document.getElementById('create');

nameInput.addEventListener('input', imprimirValor);
emailInput.addEventListener('input', imprimirValor);
passwordInput.addEventListener('input', verificarForcaSenha);

function imprimirValor() {
  // Obtém o valor de cada input
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (nameValue || emailValue || passwordValue) {
    console.log('Valor digitado:', nameValue || emailValue || passwordValue);
  }
}

function verificarForcaSenha() {
  const passwordValue = passwordInput.value;

  if (passwordValue.length >= 4 && passwordValue.length < 6) {
    spanStrength.classList.remove('hidden');
    passwordStrengthP1.classList.remove('hidden');
    passwordStrengthP2.classList.add('hidden');
    passwordStrengthP3.classList.add('hidden');
  } else if (passwordValue.length >= 6 && passwordValue.length < 8) {
    spanStrength.classList.remove('hidden');
    passwordStrengthP1.classList.remove('hidden');
    passwordStrengthP2.classList.remove('hidden');
    passwordStrengthP3.classList.add('hidden');
  } else if (passwordValue.length >= 8) {
    spanStrength.classList.remove('hidden');
    passwordStrengthP1.classList.remove('hidden');
    passwordStrengthP2.classList.remove('hidden');
    passwordStrengthP3.classList.remove('hidden');
  } else {
    spanStrength.classList.add('hidden');
    passwordStrengthP1.classList.add('hidden');
    passwordStrengthP2.classList.add('hidden');
    passwordStrengthP3.classList.add('hidden');
  }
}

loginButton.addEventListener('click', verificarConta);
createButton.addEventListener('click', criarConta);

function criarConta() {
  if (nameInput.value === '') {
    nameInput.classList.add('error-code');
  } else {
    nameInput.classList.remove('error-code');
  }
  if (emailInput.value === '') {
    emailInput.classList.add('error-code');
  } else {
    emailInput.classList.remove('error-code');
  }
  if (passwordInput.value === '') {
    passwordInput.classList.add('error-code');
  } else {
    passwordInput.classList.remove('error-code');
  }
  if (
    nameInput.value != '' ||
    emailInput.value != '' ||
    passwordInput.value != ''
  ) {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(
      `Seja bem vindo ${name}, seu email é ${email} e sua senha é ${password}`
    );
  }
}

function verificarConta() {
  if (nameInput.value === '') {
    nameInput.classList.add('error-code');
  } else {
    nameInput.classList.remove('error-code');
  }
  if (passwordInput.value === '') {
    passwordInput.classList.add('error-code');
  } else {
    passwordInput.classList.remove('error-code');
  }
  if (nameInput.value === 'admin' && passwordInput.value === 'admin') {
    if (loginButton) {
      console.log('Login Sucess');
    } else if (createButton) {
      console.log('Conta criada');
    }
  } else {
    console.log('Digite os dados corretamente!');
  }
}
