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
  return a / b;
}

let equation = ""
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', () => {
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
  })}

  window.addEventListener("keydown", (e) => {
    const regexNumber = /[0-9]/;
    const regexAlpha = /[a-z]/;
    if (regexAlpha.test(e.key) === true && e.code !== "Backspace") {
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
    if (regexNumber.test(e.key) === true) {
      console.log("valid!")
    }
    if (e.code === "Enter") {
      operate();
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

    } else if (!(e.code === "Backspace" || e.code === "Escape")) {
        equation += e.key;
        screen.textContent = equation;
        console.log(equation)
      }
    }
  )


// Digit1, Minus, Equal, ShiftLeft + Equal, Slash, Escape

// myOperation = "1+1";
// let parts;
// function operate() {
//   parts = myOperation.split("");
//   return parts;
// }

// operate(myOperation);
// console.log(parts)



// parts.reduce((p, c, i) => {
//   if (parts[i] === "+") {
//     return 
//   }
// }, 0)


// const regex = /[0-9]*$/
// for (element of myOperation) {
//   if (element.test(regex) === true) {
//     console.log(`${element} is a number`)
//   } else if (!(element.test(regex) === true)) {
//     console.log(`${element} is NaN`)
//   }
// }