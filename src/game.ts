import { Game } from '@core';

// Create a game and export it
export const game = new Game({
  /**
   * Root canvas element selector
   */
  selector: 'canvas#game',
  /**
   * Canvas height (px).
   */
  height: 360,
  /**
   * Canvas width (px).
   */
  width: 360,
});
