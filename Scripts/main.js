let chance = Math.random();
let equation = '';
let result = '';
document.getElementById("panel").addEventListener("click", function(event) {
  if (event.target.classList.contains("digit")){
    equation+=event.target.textContent
    display(equation)
    saveToStorage(equation)
    // console.log(`equation is : ${equation}`);
  }else if(event.target.classList.contains("operation")){
    if (chance<0.1){
      equation = faultyCalc(event.target)
      display(equation)
      saveToStorage(equation)
      //console.log(event.target.textContent+"faulty")
    }else{
      equation+=event.target.textContent
      display(equation)
      saveToStorage(equation)
      
    }
  }else if(event.target.classList.contains("equal")){
    result = eval(equation)
    display(result)
    localStorage.setItem("result",result)
    result = getFromStorage()
    
    //console.log(`Result is : ${result}`)
  }else if(event.target.classList.contains("clear")){
    equation = ''
    display(equation)
    saveToStorage(equation)
    
  }
});

function faultyCalc(hit){
  if(hit.textContent === "/"){
    equation+="*"
  }else if(hit.textContent === "+"){
    equation+="-"
  }else if(hit.textContent === "-"){
    equation+="/"
  }else if(hit.textContent === "*"){
    equation+="+"
  }
  return equation
}
function saveToStorage(equation){
  localStorage.setItem("equation",equation)
}
function getFromStorage(){
   return localStorage.getItem("result")
}
function display(eqres){
  document.querySelector('.display').innerHTML = eqres
}