let equation = ""
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', () => {
    if (button.className === "add" || button.className === "subtract" || button.className === "multiply" || button.className === "divide") {
      let parts = equation.split("")
      for (let i=0; i<parts.length;i++) {
        if (parts[i] === "+" || parts[i] === "-" || parts[i] === "/" || parts[i] === "*") {
          equation = getCalc(equation);
          screen.textContent = equation;
        } else {
          continue;
        }
      }
    }
    if (button.className === "clear") {
      equation = "";
      screen.textContent = equation;
      console.log(equation)
    }
    if (button.className === "delete") {
      const split = screen.textContent.split("");
      split.pop();
      equation = split.join("");
      screen.textContent = equation;
      console.log(equation)
    }
    if (!(button.className === "clear" || button.className === "delete" || button.className === "operate")) {
      equation += button.textContent;
      screen.textContent = equation;
      console.log(equation)
    }

    if (button.className === "operate") {
      equation = getCalc(equation);
      screen.textContent = equation;
    }
  })}

  window.addEventListener("keydown", (e) => {
    const regexNumber = /[0-9]/;
    const regexAlpha = /[a-z]/;
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      let parts = equation.split("")
      for (let i=0; i<parts.length;i++) {
        if (parts[i] === "+" || parts[i] === "-" || parts[i] === "/" || parts[i] === "*") {
          equation = getCalc(equation);
          screen.textContent = equation;
        } else {
          continue;
        }
      }
    }

    if (regexAlpha.test(e.key) === true && e.code !== "Backspace" && e.code !== "Enter" && e.code !== "ShiftLeft") {
      console.log(equation)
      const filler = screen.textContent;
      screen.textContent = "INVALID NUMBER";
      screen.style.color = "Red";
      function removeWarning() {
        screen.textContent = filler;
        screen.style.color = "Black";
      }
      setTimeout(removeWarning, 200);
      return;
    }
    if (e.code === "Enter") {
      equation = getCalc(equation);
      screen.textContent = equation;
    } else if (e.code === "Backspace") {
      e.stopImmediatePropagation();
      const split = screen.textContent.split("");
      split.pop();
      equation = split.join("");
      screen.textContent = equation;
      console.log(equation)
    } else if (e.code === "Escape") {
      equation = "";
      screen.textContent = equation;
      console.log(equation)

    } else if (!(e.code === "Backspace" || e.code === "Escape" || e.code === "ShiftLeft" || e.code === "ShiftRight")) {
        equation += e.key;
        screen.textContent = equation;
        console.log(equation)
      }
    }
  )

function getCalc(equation) {
  let operator = null;
  let firstNum = null;
  let secondNum = null;
  let calcElements = {};
  let parts = equation.split("");
  for (let i=0; i<parts.length; i++) {
    if (parts[i] === "+" || parts[i] === "-" || parts[i] === "/" || parts[i] === "*") {
      operator = parts[i];
      for (let x=0; x<i; x++) {
        if (firstNum === null) {
          firstNum = parts[x];
        } else {
          firstNum += parts[x];
        }
      }
      for (let y=parts.length-1; y>i; y--) {
        if (secondNum === null) {
          secondNum = parts[y];
        } else {
          let toAdd = parts[y];
          secondNum = toAdd + secondNum;
        }
      }
    } else {
      continue;
    }
  }
  return operate(firstNum, secondNum, operator);
}


function operate(firstNum, secondNum, operator) {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return  subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator === "/") {
    return divide(firstNum, secondNum);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return Math.round(a / b);
}


  





