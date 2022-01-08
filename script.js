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
