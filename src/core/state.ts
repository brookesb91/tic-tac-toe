import { Frame } from './frame';

export interface State {
  enter(): void;
  render(ctx: CanvasRenderingContext2D): void;
  update(frame: Frame): void;
  exit(): void;
}
