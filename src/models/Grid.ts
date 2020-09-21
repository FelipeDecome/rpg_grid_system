import { IElementPosition } from "../types";

import { cellSize, colsCount, rowsCount, gridColor } from "../config";
import { context } from "../factories/canvas";

class Grid {
  private tokenList: Array<[{}]>;

  constructor() {
    this.tokenList = [];
  }

  public render() {
    this.drawGrid();
    this.drawTokens();
  }

  public addToken(row: number, col: number, token: {}) {
    this.tokenList[row][col] = token;
  }

  public changeTokenPosition(tokenId: number, row: number, col: number) {}

  private drawGrid() {
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

  private drawTokens() {}
}

const grid = new Grid();

export default grid;
