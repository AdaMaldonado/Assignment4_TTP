/*-----------JavaScript for Question 1------------*/

let firstTextEl = document.getElementById("firstText")
let secondTextEl = document.getElementById("secondText")

function firstFunction() {
  firstTextEl.innerHTML ="I'm right" 
  secondTextEl.innerHTML =""
}

function secondFunction() {
  firstTextEl.innerHTML ="" 
  secondTextEl.innerHTML ="No, I'm right!"
}

/*----------JavaScript for Question 2------------*/

let hoverTextEl = document.getElementById("hoverText")

hoverTextEl.addEventListener(
  "mouseover", 
  function() {
    alert("Hey, I told you not to hover over me!")
  }
)
