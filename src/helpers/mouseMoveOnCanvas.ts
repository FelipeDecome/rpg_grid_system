import { IElementPosition, TObserver } from "../types";
import { onMouseMove } from "../handlers/canvasHandlers";

function initMouseOnCanvas() {
  const position: IElementPosition = { x: 0, y: 0 };

  const observers: TObserver[] = [];

  window.addEventListener("mousemove", onMouseMove);

  function setX(x: number) {
    position.x = x;
    notifyChange();
  }

  function setY(y: number) {
    position.y = y;
    notifyChange();
  }

  function reset() {
    setX(0);
    setY(0);
  }

  function addObserver(observer: TObserver) {
    observers.push(observer);
  }

  function notifyChange() {
    observers.forEach(observer => observer(position));
  }

  return {
    position,
    setX,
    setY,
    reset,
    addObserver,
  };
}

export default initMouseOnCanvas();
