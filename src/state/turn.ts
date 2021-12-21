import { Frame, State } from '@core';
import { Player, Position } from '@models';

export class TurnState implements State {
  constructor(private player: Player, private position: Position) {}

  enter(): void {
    // throw new Error('Method not implemented.');
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log('Render');
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.player, this.position.x, this.position.y);
  }

  update(frame: Frame): void {
    // throw new Error('Method not implemented.');
  }

  exit(): void {
    // throw new Error('Method not implemented.');
  }

  toString() {
    return `Turn - player: ${this.player} - position: ${this.position.x},${this.position.y}`;
  }
}
