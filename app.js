let gridContainer = document.querySelector(".grid-container");

function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    gridContainer.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

let gridItem = document.querySelectorAll(".grid-item");

gridItem.forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "green";
  });
});
