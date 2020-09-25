import { IElementPositionOnScreen, TMouseObserver } from "../types";
import isCanvasElement from "../utils/isCanvasElement";

function MouseMoveObserver() {
  window.addEventListener("mousemove", mouseMoveHandler);

  const observers: TMouseObserver[] = [];
  const position: IElementPositionOnScreen = { x: 0, y: 0 };

  function mouseMoveHandler(event: MouseEvent) {
    const isCanvas = isCanvasElement(event.target as HTMLCanvasElement);

    if (isCanvas) {
      setPosition(event);
    } else {
      position.x = 0;
      position.y = 0;
    }

    notifyChange();
  }

  function setPosition(event: MouseEvent) {
    const { offsetLeft, offsetTop } = event.target as HTMLCanvasElement;

    const { clientX, clientY } = event;
    const { scrollX, scrollY } = window;

    position.x = clientX - offsetLeft + scrollX;
    position.y = clientY - offsetTop + scrollY;
  }

  function addObserver(observer: TMouseObserver) {
    observers.push(observer);
  }

  function notifyChange() {
    observers.forEach((observer) => observer(position));
  }

  return {
    addObserver,
  };
}

export default MouseMoveObserver();
