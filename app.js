let gridContainer = document.querySelector(".grid");
let gridSizeSlider = document.querySelector(".grid-size-slider");
let gridSizeLabel = document.querySelector(".grid-size-label");

function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    gridContainer.appendChild(cell).className = "grid-item";
  }
  let gridItem = document.querySelectorAll(".grid-item");

  gridItem.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "green";
    });
  });
}

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
