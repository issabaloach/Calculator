
const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
          display.value = '';
}

function calculate (){

    try {
      display.value = eval(display.value)
    }
    catch{
       display.value = "error!"
    }
}

const numberButtons = document.querySelectorAll('[id^="calculator"] button:not(.operator-btn)');

numberButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    appendToDisplay(e.target.innerText);
  });
});

const operatorButtons = document.querySelectorAll('.operator-btn ');
operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
     if (e.target.innerText === "=") {
      calculate();
    } else {
      appendToDisplay(e.target.innerText);
    }
  });
})

const clearButtons = document.querySelectorAll('.operator-btn1');
clearButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText === "x") {
      clearDisplay();
    } else if(e.target.innerText === "C") {
      clearDisplay();
    }
    else {
      clearDisplay();
    }
  });
});