export const RESTART_GAME = "RESTART_GAME";
export const restartGame = () => ({
  type: RESTART_GAME
});

export const ON_MAKE_GUESS = "ON_MAKE_GUESS";
export const onMakeGuess = guess => ({
  type: ON_MAKE_GUESS,
  guess
});
