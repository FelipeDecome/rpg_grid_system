import { rootElement } from "../utils/index";
import { colsCount, rowsCount, cellSize, fillColor } from "../config";

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

  canvasElement.addEventListener("mousemove", mouseMoveHandler);

  function clearCanvas() {
    context.clearRect(0, 0, width, height);
  }

  function mouseMoveHandler(event: MouseEvent) {
    const { offsetLeft, offsetTop } = event.target as HTMLCanvasElement;

    mouseOnCanvas.setX(event.clientX - offsetLeft);
    mouseOnCanvas.setY(event.clientY - offsetTop);
  }

  /*   function drawHoveredCell() {
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
  } */

  return {
    clearCanvas,
    context,
  };
}

const canvas = createCanvas();

export const { clearCanvas, context } = canvas;
