let gridContainer = document.querySelector(".grid");
let gridSizeSlider = document.querySelector(".grid-size-slider");
let gridSizeLabel = document.querySelector(".grid-size-label");
let raindbowBtn = document.querySelector(".rainbow-btn");
let colorPicker = document.querySelector(".color-picker");

let drawingColor = setDeafult;

//Create Rows and Set Drawing Color
function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
  let gridItem = document.querySelectorAll(".grid-item");

  //Changes drawing color when hoverering over
  gridItem.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = drawingColor();
    });
  });
}

//Set default color when page loads
function setDeafult() {
  return `${colorPicker.value}`;
}

//Generate Rainbow Color
function rainbow() {
  let randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function setDrawingToColorPicker() {
  return `${colorPicker.value}`;
}

//Sets rainbow drawing when clicked
raindbowBtn.addEventListener("click", function () {
  drawingColor = rainbow;
});

//Set default grid size & label, call function to create grid
let gridSize = 33;
gridSizeLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;
makeRows(gridSize, gridSize);

//Update grid size text when moving the slider
gridSizeSlider.addEventListener("mousemove", function () {
  gridSizeLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;
});

//Changes grid size when slide value changes
gridSizeSlider.addEventListener("change", function () {
  gridSize = gridSizeSlider.value;
  gridContainer.innerHTML = "";
  makeRows(gridSize, gridSize);
});

//Changes color to colorPickers Color
colorPicker.addEventListener("input", function (e) {
  drawingColor = setDrawingToColorPicker;
});
