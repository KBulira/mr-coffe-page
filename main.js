console.log('it work');

$(document).ready(() => {
  $('.submit').click((event) => {
    console.log('clicked button');
  });
});

function validateName() {
  const name = document.getElementById('name').value;
  if (name.length === 0 && !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    window.prompt('First and last name, please.', 'name-error');
    return false;
  }

  return true;
}
function validatePhone() {
  const phone = document.getElementById('phone').value;
  if (phone.length === 0 && phone.length !== 10 && !phone.match(/^[0-9]{10}$/)) {
    window.prompt('phone-error');
    return false;
  }

  return true;
}
function validateEmail() {
  const email = document.getElementById('email').value;
  if (email.length === 0 && !email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    window.prompt('Email Invalid', 'email-error');
    return false;
  }

  return true;
}
function validateMessage() {
  const message = document.getElementById('message').value;
  const required = 10;
  const left = required - message.length;

  if (left > 0) {
    window.prompt(`${left} more characters required`, 'message-error');
    return false;
  }
  return true;

  function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    window.prompt('Please fix errors to submit.', 'submit-error');
    setTimeout(() => { jsHide('submit-error'); }, 2000);
  } else {
  return true;
}
}
function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}
function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}
}
