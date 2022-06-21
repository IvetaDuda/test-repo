const inputChangeReg = document.querySelector('#regPassword');
const inputChangeLog = document.querySelector('#logPassword');

const btnRegChangePassword = document.querySelector('.regChangeBtn');
const btnLogChangePassword = document.querySelector('.logChangeBtn');

const openReg = document.querySelector('.openChangeReg');
const closedReg = document.querySelector('.closedChangeReg');

const openLog = document.querySelector('.openChangeLog');
const closedLog = document.querySelector('.closedChangeLog');

btnRegChangePassword.addEventListener('click', changePasswordInRegInput);
btnLogChangePassword.addEventListener('click', changePasswordInLogInput);

function changePasswordInRegInput() {
  if (inputChangeReg.getAttribute('type') == 'password') {
    openReg.classList.add('changeEyes');
    closedReg.classList.remove('changeEyes');

    inputChangeReg.setAttribute('type', 'text');
  } else {
    openReg.classList.remove('changeEyes');
    closedReg.classList.add('changeEyes');
    inputChangeReg.setAttribute('type', 'password');
  }
  return false;
}
function changePasswordInLogInput() {
  if (inputChangeLog.getAttribute('type') == 'password') {
    openLog.classList.add('changeEyes');
    closedLog.classList.remove('changeEyes');

    inputChangeLog.setAttribute('type', 'text');
  } else {
    openLog.classList.remove('changeEyes');
    closedLog.classList.add('changeEyes');
    inputChangeLog.setAttribute('type', 'password');
  }
  return false;
}
