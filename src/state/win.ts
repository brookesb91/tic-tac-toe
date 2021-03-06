import { Frame, State } from '@core';
import { Player } from '@models';

export class WinState implements State {
  constructor(private winner: Player) {}

  enter(): void {
    // NOOP
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.textAlign = 'center';
    ctx.font = '50px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText(
      `${this.winner} wins!`,
      ctx.canvas.width / 2,
      ctx.canvas.height / 2
    );
  }

  update(frame: Frame): void {
    // NOOP
  }

  exit(): void {
    // NOOP
  }
}
