import { State, Frame } from '@core';
import { game } from '@game';
import { Player } from '@models';

import { DrawState } from './draw';
import { TurnState } from './turn';
import { WinState } from './win';

export class BoardState implements State {
  readonly players: Player[] = ['x', 'o'];
  readonly moves: string[][];
  private player: Player;
  private size: number;

  constructor() {
    this.player = this.players[Math.floor(Math.random() * this.players.length)];
    this.moves = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.size = game.canvas.width / 3;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'black';

    ctx.beginPath();

    ctx.moveTo(this.size, 0);
    ctx.lineTo(this.size, this.size * 3);

    ctx.moveTo(this.size * 2, 0);
    ctx.lineTo(this.size * 2, this.size * 3);

    ctx.moveTo(0, this.size);
    ctx.lineTo(this.size * 3, this.size);

    ctx.moveTo(0, this.size * 2);
    ctx.lineTo(this.size * 3, this.size * 2);

    ctx.stroke();
  }

  update(frame: Frame): void {
    // NOOP
  }

  exit(): void {
    // NOOP
  }

  enter(): void {
    game.canvas.addEventListener('click', this.handleClick);
  }

  hasAvailableMoves() {
    return this.moves.flat().some((i) => i === null);
  }

  checkWinCondition() {
    return [
      // horizontal
      [this.moves[0][0], this.moves[1][0], this.moves[2][0]],
      [this.moves[0][1], this.moves[1][1], this.moves[2][1]],
      [this.moves[0][2], this.moves[1][2], this.moves[2][2]],
      // vertical
      [this.moves[0][0], this.moves[0][1], this.moves[0][2]],
      [this.moves[1][0], this.moves[1][1], this.moves[1][2]],
      [this.moves[2][0], this.moves[2][1], this.moves[2][2]],
      // diagonal
      [this.moves[0][0], this.moves[1][1], this.moves[2][2]],
      [this.moves[2][0], this.moves[1][1], this.moves[0][2]],
    ].some((i) => i.every((j) => j === this.player));
  }

  handleClick = (ev: MouseEvent) => {
    const rect = (ev.target as HTMLCanvasElement).getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    const moveX = Math.floor(x / this.size);
    const moveY = Math.floor(y / this.size);

    this.moves[moveX][moveY] = this.player;

    game.stack.push(
      new TurnState(this.player, {
        x: (moveX + 1) * this.size - this.size * 0.5,
        y: (moveY + 1) * this.size - this.size * 0.5,
      })
    );

    if (this.hasAvailableMoves()) {
      if (this.checkWinCondition()) {
        this.finish();
        game.stack.push(new WinState(this.player));

        // reset game on click
      } else {
        // next turn
        this.player = this.player === 'x' ? 'o' : 'x';
      }
    } else {
      // Draw
      this.finish();
      game.stack.push(new DrawState());
    }
  };

  finish() {
    game.canvas.removeEventListener('click', this.handleClick);
    game.canvas.addEventListener(
      'click',
      () => {
        game.stack.clear();
        game.stack.push(new BoardState());
      },
      { once: true }
    );
  }

  toString(): string {
    return 'Start';
  }
}
