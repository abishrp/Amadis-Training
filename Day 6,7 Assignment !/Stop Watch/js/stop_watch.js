//Accessing elements by DOM
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const colon = document.querySelectorAll(".colon");
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const ms = document.querySelector(".ms");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


let hrs = mins = secs = mss = 0,repeatation;
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);


// Function definitions

//1. startTimer function
function startTimer() {
  start.classList.add("buttoninactive");
  stop.classList.remove("buttoninactive");
  loader.style.display="block";
  container.style.borderColor = "green";
  for(let i=0;i<colon.length;i++)
    {
      colon[i].style.animation="blink 1s step-start infinite";
    }
  repeatation = setInterval(() => {
    mss++;
    if (mss == 100) {
      mss = 0;
      secs++;
    }
    if (secs == 60) {
      secs = 0;
      mins++;
    }
    if (mins == 60) {
      mins = 0;
      hrs++;
    }
    hr.innerHTML=String(hrs).padStart(2, "0");
  min.innerHTML=String(mins).padStart(2, "0");
  sec.innerHTML=String(secs).padStart(2, "0");
  ms.innerHTML=String(mss).padStart(2, "0");

  }, 10);
}

//2. stopTimer function
function stopTimer() {
  container.style.borderColor = "red";
  loader.style.display="none";
  start.classList.remove("buttoninactive");
  stop.classList.add("buttoninactive");
  clearInterval(repeatation);
}

//3. resetTimer function
function resetTimer() {
  clearInterval(repeatation);
  start.classList.remove("buttoninactive");
  stop.classList.add("buttoninactive");
  loader.style.display="none";
  container.style.borderColor = "var(--blue)";
  for(let i=0;i<colon.length;i++)
    {
      colon[i].style.animation="none";

    }
  hrs = mins = secs = mss = 0;
  hr.innerHTML=String(hrs).padStart(2, "0");
  min.innerHTML=String(mins).padStart(2, "0");
  sec.innerHTML=String(secs).padStart(2, "0");
  ms.innerHTML=String(mss).padStart(2, "0"); 
}
