import { Frame } from './frame';
import { State } from './state';

export class Stack {
  public get state() {
    return this.states[this.states.length - 1] || null;
  }

  private states: State[];

  constructor() {
    this.states = [];
  }

  render(ctx: CanvasRenderingContext2D) {
    let i = 0;
    const length = this.states.length;

    while (i < length) {
      ctx.save();
      this.states[i].render(ctx);
      ctx.restore();

      i++;
    }
  }

  update(frame: Frame) {
    if (this.state) {
      this.state.update(frame);
    }
  }

  push(state: State) {
    console.log(`[State - Enter] ${this.state} -> ${state}`);

    this.states.push(state);

    state.enter();
    return this;
  }

  pop() {
    const state = this.states.pop();

    console.log(`[State - Exit] ${state} -> ${this.state}`);

    state.exit();
    return this;
  }

  clear() {
    this.states = [];
    return this;
  }

  reset() {
    this.states = [];
    return this;
  }
}
