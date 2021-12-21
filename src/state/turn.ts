import { Frame, State } from '@core';
import { Player, Position } from '@models';

export class TurnState implements State {
  constructor(private player: Player, private position: Position) {}

  enter(): void {
    // NOOP
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.player, this.position.x, this.position.y);
  }

  update(frame: Frame): void {
    // NOOP
  }

  exit(): void {
    // NOOP
  }

  toString() {
    return `Turn - player: ${this.player} - position: ${this.position.x},${this.position.y}`;
  }
}
