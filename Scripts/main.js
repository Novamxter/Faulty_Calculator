import {
  adjustFontSize,
  scrollLeft,
  fontSize,
  faultyModeOn,
  faultyModeOff,
  initialTimeout
} from "./handle-display.js";

let chance;
let equation = getEquation() || "";
let result = "";
let isfaulty = JSON.parse(localStorage.getItem("faulty"))||false;//Converted to Boolean value back (false not "false")
displayEq(equation);
initialTimeout(isfaulty);
document.getElementById("panel").addEventListener("click", function (event) {
  handleMainLogic(event.target);
  adjustFontSize();
  saveEquation(equation);
});

function handleMainLogic(element) {
  scrollLeft();
  chance = Math.random();
  if (element.classList.contains("digit")) {
    equation += element.textContent;
    displayEq(equation);
    return;
  } else if (element.classList.contains("operation")) {
    equation += element.getAttribute("data-value");
    displayEq(equation);
    return;
  } else if (element.classList.contains("percent")) {
    equation += "/100";
    result = eval(equation);
    equation = result;
    displayResult(result);
    roundUp(result);
    return;
  } else if (element.classList.contains("equal")) {
    if (equation === "2410") {
      isfaulty = true;
      faultyModeOn();
      equation = "";
      saveEquation(equation);
      displayEq(equation);
      return;
    } else if (equation === "968") {
      isfaulty = false;
      faultyModeOff();
      equation = "";
      saveEquation(equation);
      displayEq(equation);
      return;
    }
    localStorage.setItem("faulty",isfaulty)
    try {
      if (equation.trim() === "") {
        alert("Please Enter something");
      }
      if (/^-?\d+(\.\d+)?$/.test(equation)) {
        return; // Do nothing if it's just a single number
      }
      if (/^[0-9+\-*/().]+$/.test(equation)) {
        if (chance < 0.2 && isfaulty) {
          let falResult = faultyCalc(equation);
          result = String(eval(falResult));
        } else {
          result = String(eval(equation));
        }
        equation = result;
        displayResult(result);
        roundUp(result);
      }
    } catch (e) {
      alert("Invalid Equation");
    }
  } else if (element.classList.contains("dot")) {
    equation += ".";
    displayEq(equation);
    return;
  } else if (element.classList.contains("clear")) {
    fontSize.currentFontSize = 45;
    equation = "";
    clearRoundUp();
    displayEq(equation);
  } else if (element.classList.contains("back")) {
    equation = equation.toString().slice(0, -1);
    displayEq(equation);
  }
}

function faultyCalc(hit) {
  //Used temporary placeholder for Cascading Replacement Bug
  return hit
    .replace(/\+/g, "temp")
    .replace(/\-/g, "/")
    .replace(/\//g, "*")
    .replace(/\*/g, "+")
    .replace(/temp/g, "-");
}
function saveEquation(equation) {
  localStorage.setItem("equation", equation);
}
function getEquation() {
  return localStorage.getItem("equation");
}
function displayResult(result) {
  document.querySelector(".display").innerHTML = result;
}
function displayEq(eq) {
  document.querySelector(".display").innerHTML = eq
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
