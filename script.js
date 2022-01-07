let firstButtonEl = document.getElementById("firstButton")
let secondButtonEl = document.getElementById("secondButton")

let firstTextEl = document.getElementById("firstText")
let secondTextEl = document.getElementById("secondText")

firstButtonEl.addEventListener(
  "click", 
  function() {
    firstTextEl.textContent("I'm right")
  }
)

secondButtonEl.addEventListener(
  "click", 
  function() {
    secondTextEl.textContent("No, I'm right!")
  }
)
