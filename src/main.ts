import { game } from '@game';
import { StartState } from '@state';

const main = () => {
  // Push initial state
  game.stack.push(new StartState());

  // Start the game
  game.start();
};

try {
  main();
} catch (e) {
  console.error(e);
}
