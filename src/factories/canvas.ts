import $ from "../utils/$";
import {
  colsCount,
  rowsCount,
  cellSize,
  fillColor,
  gridColor,
  hoveredGridColor,
} from "../config";

import mouseOnCanvas from "../helpers/mouseOnCanvas";

const rootElement = $("#root")[0];

function createCanvas() {
  const width = colsCount * cellSize;
  const height = rowsCount * cellSize;

  const canvasElement = document.createElement("canvas");
  const context = canvasElement.getContext("2d");

  canvasElement.width = width;
  canvasElement.height = height;
  canvasElement.style.backgroundColor = fillColor;
  rootElement.append(canvasElement);

  canvasElement.addEventListener("mousemove", mouseMoveHandler);

  mouseOnCanvas.addObserver(drawHoveredCell);

  function clearCanvas() {
    context.clearRect(0, 0, width, height);
  }

  function drawGrid() {
    for (let col = 0; col < colsCount; col++) {
      context.moveTo(col * cellSize, 0);
      context.lineTo(col * cellSize, colsCount * cellSize);
    }

    for (let row = 0; row < rowsCount; row++) {
      context.moveTo(0, row * cellSize);
      context.lineTo(rowsCount * cellSize, row * cellSize);
    }

    context.strokeStyle = gridColor;
    context.stroke();
  }

  function mouseMoveHandler(event: MouseEvent) {
    const { offsetLeft, offsetTop } = event.target as HTMLCanvasElement;

    mouseOnCanvas.setX(event.clientX - offsetLeft);
    mouseOnCanvas.setY(event.clientY - offsetTop);
  }

  function drawHoveredCell() {
    drawGrid();
    const { x, y } = mouseOnCanvas.position;

    if (x > 0 && x < width && y > 0 && y < height) {
      const row = Math.floor(y / cellSize);
      const col = Math.floor(x / cellSize);

      context.beginPath();
      context.moveTo(col * cellSize, row * cellSize);

      context.lineTo(col * cellSize + cellSize, row * cellSize);

      context.lineTo(col * cellSize + cellSize, row * cellSize + cellSize);

      context.lineTo(col * cellSize, row * cellSize + cellSize);

      context.lineTo(col * cellSize, row * cellSize);

      context.strokeStyle = hoveredGridColor;
      context.stroke();
    }
  }

  return {
    clearCanvas,
    context,
    drawGrid,
  };
}

const canvas = createCanvas();

export const { clearCanvas, context, drawGrid } = canvas;
