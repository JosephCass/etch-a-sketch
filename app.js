let gridContainer = document.querySelector(".grid");
let gridSizeSlider = document.querySelector(".grid-size-slider");
let gridSizeLabel = document.querySelector(".grid-size-label");
let raindbowBtn = document.querySelector(".rainbow-btn");

//Create Rows and Set Drawing Color
function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
  let gridItem = document.querySelectorAll(".grid-item");

  gridItem.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = drawingColor();
    });
  });
}

function setDeafult() {
  return "black";
}

function rainbow() {
  let randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

let drawingColor = setDeafult;

raindbowBtn.addEventListener("click", function () {
  drawingColor = rainbow;
});

let gridSize = 33;
gridSizeLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;

makeRows(gridSize, gridSize);

gridSizeSlider.addEventListener("mousemove", function () {
  gridSizeLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;
});

gridSizeSlider.addEventListener("change", function () {
  gridSize = gridSizeSlider.value;
  gridContainer.innerHTML = "";
  makeRows(gridSize, gridSize);
});
