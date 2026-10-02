let display = document.getElementById('display');
let isDegrees = true;
 function calculate() {
  let result = display.value;
  try {
    if(isDegrees) {
      result = result.replace(/sin\(/g, 'Math.sin(Math.PI/180*');
      result = result.replace(/cos\(/g, 'Math.cos(Math.PI/180*');
      result = result.replace(/tan\(/g, 'Math.tan(Math.PI/180*');
    }
    let answer = eval(result);
    display.value = answer;
  } catch (error) {
    display.value = "Error";
  }
}

function backspace(){
  display.value = display.value.slice(0, -1);
}

function addDecimal() {
  if(!display.value.includes('.')) {
    display.value += '.';
  }
}