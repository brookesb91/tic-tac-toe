import { Stack } from '@core';

export interface GameConfig {
  /**
   * Selector for the root element.
   * This element should be of type `HTMLCanvasElement`.
   */
  selector: string;
  /**
   * Height of the rendering canvas in pixels.
   */
  height: number;
  /**
   * Width of the rendering canvas in pixels.
   */
  width: number;
}

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private stopped: boolean = false;
  private time: number = 0;

  readonly stack: Stack = new Stack();

  constructor({ selector, height, width }: GameConfig) {
    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = height;
    this.canvas.width = width;
  }

  start() {
    const update = (time: number) => {
      const delta = time - this.time;
      this.time = time;

      if (!this.stopped) {
        if (time !== 0) {
          this.initCanvas();
        }

        this.stack.update({ time, delta });
        this.stack.render(this.ctx);

        requestAnimationFrame((t) => update(t));
      }
    };

    update(this.time);
  }

  stop() {
    this.stopped = true;
  }

  private initCanvas() {
    this.canvas.height = this.canvas.height;
    this.canvas.width = this.canvas.width;
  }
}
