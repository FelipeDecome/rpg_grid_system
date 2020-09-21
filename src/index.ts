import grid from "./models/Grid";

function init() {
  grid.render();

  requestAnimationFrame(init);
}

requestAnimationFrame(init);
