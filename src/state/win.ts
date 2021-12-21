import { Frame, State } from '@core';
import { Player } from '@models';

export class WinState implements State {
  constructor(private winner: Player) {}

  enter(): void {
    // throw new Error('Method not implemented.');
  }

  render(ctx: CanvasRenderingContext2D): void {
    // throw new Error('Method not implemented.');
    ctx.textAlign = 'center';
    ctx.font = '50px Arial';
    ctx.fillText(
      `${this.winner} wins!`,
      ctx.canvas.width / 2,
      ctx.canvas.height / 2
    );
  }

  update(frame: Frame): void {
    // throw new Error('Method not implemented.');
  }

  exit(): void {
    // throw new Error('Method not implemented.');
  }
}
