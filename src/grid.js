const $ = document.querySelectorAll.bind(document);
const rootElement = $("#root")[0];

const gridSettings = {
  rowsCount: 20,
  colsCount: 20,
  cellSize: 40,
};

const canvas = {
  getWidth: () => {
    return gridSettings.colsCount * gridSettings.cellSize;
  },
  getHeight: () => {
    return gridSettings.rowsCount * gridSettings.cellSize;
  },
  fillColor: "#fff",
  gridColor: "#eaeaea",
};

const canvasElement = document.createElement("canvas");
canvasElement.classList.add("canvas");

canvasElement.style.backgroundColor = canvas.fillColor;
canvasElement.style.border = `1px solid ${canvas.gridColor}`;

rootElement.append(canvasElement);

const canvasContext = canvasElement.getContext("2d");

function drawGrid(options) {
  const { rowsCount, colsCount, cellSize } = options;

  for (let col = 0; col < colsCount; col++) {
    canvasContext.moveTo(col * cellSize, 0);
    canvasContext.lineTo(col * cellSize, rowsCount * cellSize);
  }

  for (let row = 0; row < rowsCount; row++) {
    canvasContext.moveTo(0, row * cellSize);
    canvasContext.lineTo(rowsCount * cellSize, row * cellSize);
  }

  canvasContext.strokeStyle = canvas.gridColor;
  canvasContext.stroke();
}

function canvasSizeObserver() {
  let canvasHeightHasChanged =
    gridSettings.rowsCount * gridSettings.cellSize !==
    canvasElement.clientHeight;

  if (canvasHeightHasChanged) {
    canvasElement.height = canvas.getHeight();
  }

  let canvasWidthHasChanged =
    gridSettings.colsCount * gridSettings.cellSize !==
    canvasElement.clientWidth;

  if (canvasWidthHasChanged) {
    canvasElement.width = canvas.getWidth();
  }
}

function init() {
  canvasSizeObserver();
  clearCanvas();

  drawGrid(gridSettings);
  drawCellHovered();

  requestAnimationFrame(init);
}

requestAnimationFrame(init);

function clearCanvas() {
  canvasContext.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
}

const mousePositionOnCanvas = { x: null, y: null };

function drawCellHovered() {
  const { x, y } = mousePositionOnCanvas;

  if (x >= 0 && y >= 0) {
    const row = Math.floor(y / gridSettings.cellSize);
    const col = Math.floor(x / gridSettings.cellSize);

    canvasContext.strokeStyle = "#9fc9fc";

    canvasContext.beginPath();
    canvasContext.moveTo(
      col * gridSettings.cellSize,
      row * gridSettings.cellSize
    );

    canvasContext.lineTo(
      col * gridSettings.cellSize + gridSettings.cellSize,
      row * gridSettings.cellSize
    );

    canvasContext.lineTo(
      col * gridSettings.cellSize + gridSettings.cellSize,
      row * gridSettings.cellSize + gridSettings.cellSize
    );

    canvasContext.lineTo(
      col * gridSettings.cellSize,
      row * gridSettings.cellSize + gridSettings.cellSize
    );

    canvasContext.lineTo(
      col * gridSettings.cellSize,
      row * gridSettings.cellSize
    );

    canvasContext.stroke();
  }
}

function mouseMoveCanvasHandler(event) {
  mousePositionOnCanvas.x = event.clientX - event.target.offsetLeft;
  mousePositionOnCanvas.y = event.clientY - event.target.offsetTop;
}

canvasElement.addEventListener("mousemove", mouseMoveCanvasHandler);
