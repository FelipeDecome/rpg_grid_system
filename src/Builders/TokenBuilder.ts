import { IElementPosition } from "../types";
import Token from "../Models/Token";

let idCount: number = 0;
function nextId() {
  idCount++;
}

export default class TokenBuilder {
  private characterId: number;
  private source: string;
  private size: number;
  private position: IElementPosition;

  public setCharacterId(characterId: number) {
    this.characterId = characterId;
    return this;
  }

  public setSource(source: string) {
    this.source = source;
    return this;
  }

  public setSize(size: number) {
    this.size = size;
    return this;
  }

  public setPosition(position: IElementPosition) {
    this.position = position;
    return this;
  }

  public build() {
    let id = idCount;
    nextId();
    return new Token(
      id,
      this.characterId,
      this.source,
      this.size,
      this.position
    );
  }
}
