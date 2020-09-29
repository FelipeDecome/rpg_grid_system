import { IElementPositionOnScreen, TMouseObserver } from "../types";

function mouseOnCanvas() {
  const position: IElementPositionOnScreen = { x: 0, y: 0 };

  const observers: TMouseObserver[] = [];

  function setMousePosition(newPosition: IElementPositionOnScreen) {
    let { x, y } = newPosition;

    if (x === 0 && y === 0) reset();
    else {
      if (position.x !== x) position.x = x;

      if (position.y !== y) position.y = y;
      notifyChange();
    }
  }

  function reset() {
    position.x = 0;
    position.y = 0;
  }

  function addObserver(observer: TMouseObserver) {
    observers.push(observer);
  }

  function notifyChange() {
    observers.forEach((observer) => observer(position));
  }

  return {
    position,
    setMousePosition,
    addObserver,
  };
}

export default mouseOnCanvas();
