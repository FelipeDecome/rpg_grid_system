import {
  cellSize,
  colsCount,
  fillColor,
  gridColor,
  hoveredGridColor,
  rowsCount,
} from "../config";
import { rootElement } from "../utils/rootElement";

import * as canvasHandlers from "../handlers/canvasHandlers";
import mouseOnCanvas from "../helpers/mouseOnCanvas";

function createCanvas() {
  const width = colsCount * cellSize;
  const height = rowsCount * cellSize;

  const canvasElement = document.createElement("canvas");
  const context = canvasElement.getContext("2d");

  canvasElement.width = width;
  canvasElement.height = height;
  canvasElement.style.backgroundColor = fillColor;
  rootElement.append(canvasElement);

  canvasElement.addEventListener("mousemove", canvasHandlers.onMouseMove);
  canvasElement.addEventListener("mouseleave", canvasHandlers.onMouseLeave);

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

  function drawHoveredCell() {
    drawGrid();

    const { x, y } = mouseOnCanvas.position;

    if (
      x > 0 &&
      x < colsCount * cellSize &&
      y > 0 &&
      y < rowsCount * cellSize
    ) {
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

  function clearCanvas() {
    context.clearRect(0, 0, width, height);
  }

  function drawTokens() {
    let image = new Image(cellSize, cellSize);
    image.src =
      "../../public/assets/images/009b877016c6815ef814afb4d9d9f852.jpg";
  }

  function render() {
    drawGrid();
  }

  return {
    clearCanvas,
    context,
    render,
  };
}

export default createCanvas();
