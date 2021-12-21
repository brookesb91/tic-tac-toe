# State Driven Game Starter

This is a template for `State-Stack` driven game development on the web.

A game is comprised of stacked states, responsible for their own behaviours, rendering and lifecycle. All the states exist in a single stack which is processed on every animation frame.

Game state is managed by manipulating the `stack`.

Below is a short example flow.

| Step                                                                                               | Stack                                          | State            |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------- |
| Stack is initialised.                                                                              | `[]`                                           | `null`           |
| `StartState` is pushed onto the stack to start the game.                                           | `[StartState]`                                 | `StartState`     |
| `OverworldState` is pushed onto the stack.                                                         | `[StartState, OverworldState]`                 | `OverworldState` |
| An in-game battle occurs and `BattleState` is pushed onto the stack.                               | `[StartState, OverworldState, BattleState]`    | `BattleState`    |
| The battle ends and the stack is popped.                                                           | `[StartState, OverworldState]`                 | `OverworldState` |
| The player opens their inventory menu to heal themselves. `InventoryState` is pushed to the stack. | `[StartState, OverworldState, InventoryState]` | `InventoryState` |

## Libraries

### `@game`

Exposes the global `game` object exported from `game.ts`.

### `@core`

Directory of core features.

### `@models`

Directory of model definitions used by the game implementation.

### `@state`

Directory of game states.

A game state is an object that has the following lifecycle methods, called by the `stack`.

| Method                                        | Description                                                                                                                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enter(): void`                               | Called when this state is pushed to the stack, before its first `update`.                                                                                                                                                    |
| `update(frame: Frame): void`                  | Called with each invoke of `requestAnimationFrame` by the `game`. `Frame` data is provided which includes a current timestamp as well as a delta time. `update` is only called on the state that is at the top of the stack. |
| `render(ctx: CanvasRenderingContext2D): void` | Called after each `update` on the same frame. Provides the canvas rendering context as an argument.                                                                                                                          |
| `exit(): void`                                | Called when this state is popped off the stack.                                                                                                                                                                              |
