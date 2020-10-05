const QSA = document.querySelectorAll.bind(document);

const root = QSA("#root")[0];

const createCanvas = function () {
  this.width = 600;
  this.height = 600;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  root.append(canvas);

  canvas.width = this.width;
  canvas.height = this.height;
  canvas.style.background = "#fff";

  return { context };
};

const canvas = createCanvas();
