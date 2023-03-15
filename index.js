const timer        = document.querySelector('.timer');
const timerSetting = document.querySelector('.timer__setting')
const hoursInput   = document.querySelector('.timer__input_hours');
const minutesInput = document.querySelector('.timer__input_minutes');
const secondsInput = document.querySelector('.timer__input_seconds');
const countdown    = document.querySelector('.timer__countdown');

let time = 0;
let start = setInterval(updateCountdown, 1000);

function startCountdown(evt) {
  evt.preventDefault();

  time = Number(hoursInput.value) * 3600 + Number(minutesInput.value) * 60 + Number(secondsInput.value);

  timer.setAttribute('style', 'background-color: #e8450f');

  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';

  clearInterval(start);
  start = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  let hours   = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(((time % 3600) % 60));

  hours   = hours   < 10 ? `0${hours}`   : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  countdown.textContent = `${hours} : ${minutes} : ${seconds}`;

  time > 0 ? time -- : timer.setAttribute('style', 'background-color: #6c6ced');
}

timerSetting.addEventListener('submit', startCountdown);