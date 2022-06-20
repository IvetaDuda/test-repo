const inputChangeReg = document.querySelector('#regPassword');
const inputChangeLog = document.querySelector('#logPassword');

const btnRegChangePassword = document.querySelector('.regChangeBtn');
const btnLogChangePassword = document.querySelector('.logChangeBtn');

btnRegChangePassword.addEventListener('click', changePasswordInRegInput);
btnLogChangePassword.addEventListener('click', changePasswordInLogInput);

function changePasswordInRegInput() {
  if (inputChangeReg.getAttribute('type') == 'password') {
    btnRegChangePassword.classList.add('closedEye');
    btnRegChangePassword.classList.remove('openEye');
    inputChangeReg.setAttribute('type', 'text');
  } else {
    btnRegChangePassword.classList.remove('closedEye');
    btnRegChangePassword.classList.add('openEye');
    inputChangeReg.setAttribute('type', 'password');
  }
  return false;
}
function changePasswordInLogInput() {
  if (inputChangeLog.getAttribute('type') == 'password') {
    btnLogChangePassword.classList.add('closedEye');
    btnLogChangePassword.classList.remove('openEye');
    inputChangeLog.setAttribute('type', 'text');
  } else {
    btnLogChangePassword.classList.remove('closedEye');
    btnLogChangePassword.classList.add('openEye');
    inputChangeLog.setAttribute('type', 'password');
  }
  return false;
}
