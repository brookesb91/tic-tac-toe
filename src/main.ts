import { game } from '@game';
import { BoardState } from '@state';

const main = () => {
  // Push initial state
  game.stack.push(new BoardState());

  // Start the game
  game.start();
};

try {
  main();
} catch (e) {
  console.error(e);
}
