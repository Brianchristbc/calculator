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

function operate(a, operator, b) {
  return operator(a, b)
}
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', () => {
    if (button.className === "clear") {
      screen.textContent = ""
    }
    if (button.className === "delete") {
      const split = screen.textContent.split("");
      split.pop();
      screen.textContent = split.join("");
    }
    if (!(button.className === "clear" || button.className === "delete" || button.className === "operate")) {
      screen.textContent += button.textContent;
    }
  })}

//   window.addEventListener("keydown", (e) => {
//     if (e.code === "Backspace") {
//       console.log('test')
//       const split = screen.textContent.split("");
//       split.pop();
//       screen.textContent = split.join("");
//     }
//     if (e.code === "Escape") {
//       screen.textContent = ""
//     }
//     if (!(e.code === "Backspace" || e.code === "Escape")) {
//       screen.textContent += e.key;
//     }
//   })
// }

// Digit1, Minus, Equal, ShiftLeft + Equal, Slash, Escape