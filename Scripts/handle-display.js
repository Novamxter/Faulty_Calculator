export let fontSize = {
  currentFontSize : 45
} // Initial font size in px same in css file
const display = document.querySelector(".display");
const displayPanel = document.querySelector(".display-panel");
const faultyDisplay = document.querySelector('.faulty-display')
let timeoutID;
export function adjustFontSize() {
  const displayWidth = displayPanel.clientWidth;
  const textWidth = display.scrollWidth;

  // Check if text width exceeds 90% of the container width
  if (textWidth > displayWidth * 0.9 && fontSize.currentFontSize > 30) {
    fontSize.currentFontSize -= 2; 
  }else if(textWidth < displayWidth*0.9 && fontSize.currentFontSize < 45){
    fontSize.currentFontSize +=2;
  }
  display.style.fontSize = fontSize.currentFontSize + "px"
  
}
export function scrollLeft() {
  setTimeout(() => {
    display.scrollLeft = display.scrollWidth; // Moves scroll to the left side smoothly
  }, 10);
}
export function initialTimeout(isFaulty){
  if (isFaulty){
    faultyDisplay.innerHTML = 'Faulty Mode On'
  }else{
    faultyDisplay.innerHTML = 'Faulty Mode Off'
  }
  timeoutID = setTimeout(()=>{
    faultyDisplay.style.display = "none"
  },800)
}
export function faultyModeOn(){
  clearTimeout(timeoutID)
  faultyDisplay.style.display = "block"
  faultyDisplay.innerHTML = 'Faulty Mode On';
  timeoutID = setTimeout(()=>{
    faultyDisplay.style.display = "none"
  },800)
}
export function faultyModeOff(){
  clearTimeout(timeoutID)
  faultyDisplay.style.display = "block"
  faultyDisplay.innerHTML = 'Faulty Mode Off';
  timeoutID = setTimeout(()=>{
    faultyDisplay.style.display = "none"
  },800)
}
