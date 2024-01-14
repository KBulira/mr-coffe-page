console.log('it work');

$(document).ready(() => {
  $('.submit').click((event) => {
    event.preventDefault();
    console.log('clicked button');
  });
});

function validateName() {
  const name = document.getElementById('name').value;
  if (name.length === 0 && !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    window.prompt("Prénom et nom, s'il vous plaît.", 'name/prénom-error');
    return false;
  }

  return true;
}
function validatePhone() {
  const phone = document.getElementById('phone').value;
  if (phone.length === 0 && phone.length !== 10 && !phone.match(/^[0-9]{10}$/)) {
    window.prompt('Le numéro de téléphone est requis.', 'phone-error');
    return false;
  }

  return true;
}
function validateEmail() {
  const email = document.getElementById('email').value;
  if (email.length === 0 && !email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    window.prompt('Email incorrect', 'email-error');
    return false;
  }

  return true;
}
function validateMessage() {
  const message = document.getElementById('message').value;
  const required = 15;
  const left = required - message.length;

  if (left > 0) {
    window.prompt(`${left} plus de caractères requis`, 'message-error');
    return false;
  }

  return true;
}
function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    return ('submit-error');
  }
  return true;
}
