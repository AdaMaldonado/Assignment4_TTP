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



/*--------------Function to validate form password info---------*/


function validate(){
  let pass = document.getElementById("password")
  const valiEl = document.getElementById("validated")
  if(pass.value!=="12345678"){
      alert("Acess Denied. Please check you entries")
  }
  else{
    valiEl.innerText = "Access Granted!"
    return false
  }
}