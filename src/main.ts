class Context {
  x: number;

  constructor(
    public canvas: HTMLCanvasElement,
    public ctx: CanvasRenderingContext2D
  ) {
    this.x = 0;
  }
}

const create_canvas = () => {
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.style.border = "1px solid";
  document.body.appendChild(canvas);
  return canvas;
};

const make_context = () => {
  const canvas = create_canvas();
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.font = "12px sans-serif";
  return new Context(canvas, ctx);
};

const render = (context: Context) => {
  const canvas = context.canvas;
  const ctx = context.ctx;

  context.x += 2;
  if (context.x > canvas.width) {
    context.x = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText("Hello", context.x, 20);
};

document.addEventListener("DOMContentLoaded", () => {
  const context = make_context();
  context.canvas.addEventListener("mousedown", () => {
    render(context);
  });
  context.canvas.addEventListener("mouseup", () => {
    render(context);
  });
  context.canvas.addEventListener("mousemove", () => {
    render(context);
  });
  render(context);
});
