import { State } from '@core';
import { Frame } from '@core/frame';
import { game } from '@game';

import { DialogueState } from './dialogue';

export class StartState implements State {
  render(ctx: CanvasRenderingContext2D): void {}

  update(frame: Frame): void {}

  exit(): void {}

  enter(): void {
    setTimeout(() => game.stack.push(new DialogueState('Hello World!')), 1000);
  }

  toString(): string {
    return 'Start';
  }
}
