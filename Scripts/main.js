import { adjustFontSize, scrollLeft } from "./handle-display.js";

let chance;
let equation = "";
let result = "";
document.getElementById("panel").addEventListener("click", function (event) {
  scrollLeft();
  chance = Math.random();
  if (event.target.classList.contains("digit")) {
    equation += event.target.textContent;
    displayEq(equation);
    saveToStorage(equation);
    // console.log(`equation is : ${equation}`);
  } else if (event.target.classList.contains("operation")) {
    if (chance < 0.1) {
      equation = faultyCalc(event.target);
      displayEq(equation);
      saveToStorage(equation);
    } else {
      const op = event.target.getAttribute("data-value");
      equation += op;
      displayEq(equation);
      saveToStorage(equation);
    }
  } else if (event.target.classList.contains("percent")) {
    equation += "/100";
    result = eval(equation);
    equation = result;
    displayResult(result);
    roundUp(result);
  } else if (event.target.classList.contains("equal")) {
    try {
      if (equation.trim() === "") {
        alert("Please Enter something");
      } else {
        if (/^[0-9+\-*/().]+$/.test(equation)) {
          adjustFontSize();
          result = eval(equation);
          localStorage.setItem("result", result);
          equation = result;
          displayResult(result);
          roundUp(result);
        } else {
          alert("Invalid Equation");
        }
      }
    } catch (e) {
      alert("Invalid Equation");
    }
  } else if (event.target.classList.contains("dot")) {
    equation += ".";
    displayEq(equation);
    saveToStorage(equation);
  } else if (event.target.classList.contains("clear")) {
    equation = "";
    clearRoundUp();
    displayEq(equation);
    saveToStorage(equation);
    adjustFontSize();
  } else if (event.target.classList.contains("back")) {
    equation = equation.slice(0, -1);
    displayEq(equation);
    saveToStorage(equation);
  }
});
function faultyCalc(hit) {
  const op = hit.getAttribute("data-value");
  if (op === "/") {
    equation += "*";
  } else if (op === "+") {
    equation += "-";
  } else if (op === "-") {
    equation += "/";
  } else if (op === "*") {
    equation += "+";
  }
  return equation;
}
function saveToStorage(equation) {
  localStorage.setItem("equation", equation);
}
function getFromStorage() {
  return localStorage.getItem("result");
}
function displayResult(result) {
  adjustFontSize();
  document.querySelector(".display").innerHTML = result;
}
function displayEq(equation) {
  adjustFontSize();
  document.querySelector(".display").innerHTML = equation
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");
}
function roundUp(num) {
  if (num >= 0) {
    document.querySelector(".display-approx").innerHTML =
      Math.ceil(num * 1000) / 1000;
  } else {
    document.querySelector(".display-approx").innerHTML =
      Math.floor(num * 1000) / 1000;
  }
}
function clearRoundUp() {
  document.querySelector(".display-approx").innerHTML = "";
}
