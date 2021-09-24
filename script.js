const apendMin = document.getElementById("minutes");
const apendSec = document.getElementById("seconds");
const apendMil = document.getElementById("miliseconds");

const buttonStartStop = document.getElementById("start-stop");
const buttonReset = document.getElementById("reset");
const buttonLap = document.getElementById("lap");

const lapsUl = document.querySelector(".laps-ul");

let mil = 0;
let sec = 0;
let min = 0;
let lapsNum = 0;

function count() {
  mil++;
  //miliseconds
  if (mil <= 9) {
    apendMil.innerText = `0${mil}`;
  } else {
    apendMil.innerText = `${mil}`;
  }
  //seconds
  if (mil > 99) {
    mil = 0;
    apendMil.innerText = `0${mil}`;
    sec++;
    if (sec <= 9) {
      apendSec.innerText = `0${sec}`;
    } else {
      apendSec.innerText = `${sec}`;
    }
  }
  //minutes
  if (sec >= 59) {
    sec = 0;
    apendSec.innerText = `0${sec}`;
    min++;
    if (min <= 9) {
      apendMin.innerText = `0${min}`;
    } else apendMin.innerText = `${min}`;
  }
}

let setinterval;

buttonStartStop.addEventListener("click", function startStop() {
  buttonStartStop.classList.toggle("btn-stop");
  buttonLap.classList.remove("disabled");
  clearInterval(setinterval);
  buttonStartStop.innerHTML = "Start";
  if (buttonStartStop.classList.contains("btn-stop")) {
    setinterval = setInterval(count, 10);
    buttonStartStop.innerHTML = "Stop";
  }
});

buttonReset.addEventListener("click", function () {
  lapsNum = 0;
  apendMil.innerText = `00`;
  apendMin.innerText = `00`;
  apendSec.innerText = `00`;
  clearInterval(setinterval);
  buttonStartStop.classList = "";
  buttonStartStop.innerHTML = "Start";
  lapsUl.innerHTML = "";
  buttonLap.classList.add("disabled");
});

buttonLap.classList.add("disabled");

buttonLap.addEventListener("click", function () {
  if (!buttonStartStop.classList.value == "") {
    lapsNum++;
    const lap = `${apendMin.innerText}:${apendSec.innerText}.${apendMil.innerText}`;
    const lapsLi = document.createElement("li");
    lapsLi.innerHTML = `<span>${lapsNum} - </span>${lap}`;
    lapsUl.prepend(lapsLi);
  }
});
