export default function isCanvasElement(target: HTMLCanvasElement) {
  const { nodeName } = target;

  return nodeName === "CANVAS";
}
