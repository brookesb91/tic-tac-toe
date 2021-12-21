import { State, Frame } from '@core';
import { game } from '@game';

export class DialogueState implements State {
  constructor(private text: string) {}

  render(ctx: CanvasRenderingContext2D): void {
    // Render this text to the canvas.
    ctx.textAlign = 'center';
    ctx.font = '30px Arial';
    ctx.fillText(this.text, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }

  update(): void {}

  exit(): void {}

  enter(): void {
    // Listen to the document click event, and pop this state from the stack.
    document.addEventListener('click', () => game.stack.pop(), { once: true });
  }

  /**
   * Override the `toString` method to produce readable output.
   * Otherwise, will log `[object Object]`.
   *
   * @returns {string}
   */
  toString(): string {
    return 'Dialogue';
  }
}
