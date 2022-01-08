/*-----------JavaScript for Question 1------------*/

let firstButtonEl = document.getElementById("firstButton")
let secondButtonEl = document.getElementById("secondButton")

let firstTextEl = document.getElementById("firstText")
let secondTextEl = document.getElementById("secondText")

firstButtonEl.addEventListener(
  "click", 
  function() {
    firstTextEl.textContent ="I'm right"
    secondTextEl.textContent=""
  }
)

secondButtonEl.addEventListener(
  "click", 
  function() {
    firstTextEl.textContent=""
    secondTextEl.textContent ="No, I'm right!"
  }
)


/*----------JavaScript for Question 2------------*/

let hoverTextEl = document.getElementById("hoverText")

hoverTextEl.addEventListener(
  "mouseover", 
  function() {
    alert("Hey, I told you not to hover over me!")
  }
)
