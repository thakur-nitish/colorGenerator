
function generateColor() {
  let color = "#";//
  for (let i = 0; i < 6; i++){
    let randomHex = Math.floor(Math.random() * 16).toString(16);//d
    color = color + randomHex;//'#007bff'
  }
  return color;
}


//Define a function to handle the button click
function handleButtonClick() {
  let colorBox = document.getElementById("color-box");
  let color = generateColor();
  colorBox.style.backgroundColor = color;
}

//Attach an event listener to the button
document.getElementById("generate-btn").addEventListener("click", handleButtonClick);