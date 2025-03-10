let currentFontSize = 45; // Initial font size in px same in css file
const display = document.querySelector(".display");
const displayPanel = document.querySelector(".display-panel");

export function adjustFontSize() {
  document.querySelector('.clear').addEventListener('click',()=>{
    currentFontSize = 45
  })
    
    const displayWidth = displayPanel.clientWidth;
    const textWidth = display.scrollWidth;

    // Check if text width exceeds 90% of the container width
    if (textWidth > displayWidth * 0.9 && currentFontSize > 30) {
        currentFontSize -= 3; // Reduce font size in steps
        display.style.fontSize = currentFontSize + "px";
    }

    // Ensure text shifts up when it gets too long
    if (display.scrollHeight > displayPanel.clientHeight) {
        display.style.display = "block";
        display.style.whiteSpace = "pre-wrap"; // Allow multiple lines
    }
}
export function scrollLeft(){
  setTimeout(() => {
    display.scrollLeft = display.scrollWidth // Moves scroll to the left side smoothly
  }, 10);
}
