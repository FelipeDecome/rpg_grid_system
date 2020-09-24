import mouseMoveOnCanvas from "../helpers/mouseMoveOnCanvas";

export function onMouseMove(event: MouseEvent) {
  const isCanvas = isOnCanvas(event.target as HTMLCanvasElement);

  if (isCanvas) {
    setMousePosition(event);
  } else {
    mouseMoveOnCanvas.reset();
  }
}

function setMousePosition(event: MouseEvent) {
  const { offsetLeft, offsetTop } = event.target as HTMLCanvasElement;

  const { clientX, clientY } = event;
  const { scrollX, scrollY } = window;

  mouseMoveOnCanvas.setX(clientX - offsetLeft + scrollX);
  mouseMoveOnCanvas.setY(clientY - offsetTop + scrollY);
}

function isOnCanvas(target: HTMLCanvasElement) {
  const { nodeName } = target;

  return nodeName === "CANVAS";
}
