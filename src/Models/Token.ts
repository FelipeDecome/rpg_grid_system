import { IElementPosition } from "../types";

export default class Token {
  constructor(
    private id: number,
    private characterId: number,
    private source: string,
    private size: number,
    private position: IElementPosition
  ) {}

  public changeSize(size: number) {
    if (this.size !== size) this.size = size;
    return this;
  }

  public changePosition(position: IElementPosition) {
    const { row, col } = position;
    if (this.position.row !== row) this.position.row = row;
    if (this.position.col !== col) this.position.col = col;
    return this;
  }

  public getSource() {
    return this.source;
  }

  public getCharacterId() {
    return this.characterId;
  }
}
