import canvas from "./controllers/canvasController";
import TokenBuilder from "./Entities/Builders/TokenBuilder";
import mouseOnCanvas from "./helpers/mouseOnCanvas";
import MouseMoveObserver from "./Observers/MouseMoveObserver";

canvas.drawGrid();
MouseMoveObserver.addObserver(mouseOnCanvas.setMousePosition);
mouseOnCanvas.addObserver(canvas.drawHoveredCell);

const tokenBuilder = new TokenBuilder();

const token = tokenBuilder
  .setSource("images/token.jpg")
  .setCharacterId(0)
  .setPosition({ row: 2, col: 2 })
  .setSize(2)
  .build();

canvas.addTokenOnCanvas(token);
window.onload = () => {
  canvas.drawTokens();
};
