import { IElementPositionOnScreen } from "../types";
import { rootElement } from "../utils/rootElement";

import {
  cellSize,
  colsCount,
  fillColor,
  gridColor,
  hoveredGridColor,
  rowsCount,
} from "../config";

function createCanvas() {
  const width = colsCount * cellSize;
  const height = rowsCount * cellSize;

  const canvasElement = document.createElement("canvas");
  const context = canvasElement.getContext("2d");

  canvasElement.width = width;
  canvasElement.height = height;
  canvasElement.style.backgroundColor = fillColor;
  rootElement.append(canvasElement);

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

  function drawHoveredCell(position: IElementPositionOnScreen) {
    drawGrid();

    const { x, y } = position;

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

  return {
    drawGrid,
    drawHoveredCell,
    clearCanvas,
    context,
  };
}

export default createCanvas();
