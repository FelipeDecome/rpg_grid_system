import { IElementPosition, TObserver } from "../types";

function initMouseOnCanvas() {
  const position: IElementPosition = { x: 0, y: 0 };

  const observers: TObserver[] = [];

  function setX(x: number) {
    position.x = x;
  }

  function setY(y: number) {
    position.y = y;
  }

  function reset() {
    setX(0);
    setY(0);
  }

  function addObserver(observer: TObserver) {
    observers.push(observer);
  }

  function notifyChange(position: IElementPosition) {
    observers.forEach((observer) => observer(position));
  }

  return {
    position,
    setX,
    setY,
    reset,
  };
}

export default initMouseOnCanvas();
