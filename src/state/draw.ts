import { Frame, State } from '@core';

export class DrawState implements State {
  enter(): void {
    // NOOP
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.textAlign = 'center';
    ctx.fillStyle = 'orange';
    ctx.font = '50px Arial';
    ctx.fillText(`Draw!`, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }

  update(frame: Frame): void {
    // NOOP
  }

  exit(): void {
    // NOOP
  }
}
