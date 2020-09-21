import { IElementPosition, TObservers } from "../types";

function initMouseOnCanvas() {
  const position: IElementPosition = { x: 0, y: 0 };

  const observers: TObservers = [];

  function setX(x: number) {
    position.x = x;
    notifyObservers();
  }

  function setY(y: number) {
    position.y = y;
    notifyObservers();
  }

  function addObserver(observer: () => void) {
    observers.push(observer);
  }

  function notifyObservers() {
    if (observers && observers.length > 0)
      observers.forEach(observer => observer());
  }

  return {
    position,
    setX,
    setY,
    addObserver,
  };
}

const mouseOnCanvas = initMouseOnCanvas();

export default mouseOnCanvas;
