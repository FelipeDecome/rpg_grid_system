import mouseOnCanvas from "../helpers/mouseOnCanvas";

export function onMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event;

  const { offsetLeft, offsetTop } = event.target as HTMLCanvasElement;

  mouseOnCanvas.setX(clientX - offsetLeft + window.scrollX);
  mouseOnCanvas.setY(clientY - offsetTop + window.scrollY);
}

export function onMouseLeave(event: MouseEvent) {
  mouseOnCanvas.reset();
}
