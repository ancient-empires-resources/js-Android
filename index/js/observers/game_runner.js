import Observer from './observer.js';

/** @readonly @enum {string} */
export const GAMES = Object.freeze({
  AE1: 'ae1',
  AE2: 'ae2',
});

/** @readonly */
export const GAME_URLS = Object.freeze({
  [GAMES.AE1]: '/AE1/www',
  [GAMES.AE2]: '/AE2/www',
});

const BLANK_URL = 'about:blank';

/** Game status observer for starting and stopping games. */
export class GameStatusObserver extends Observer {
  /**
   * Initialize a game status observer.
   * @param { HTMLIFrameElement } iframe the iframe in which to run the game.
   * @param { string } gameUrl the URL for the game.
  */
  constructor(iframe, gameUrl) {
    super();

    this.iframe = iframe;
    this.gameUrl = gameUrl;

    this.iframe.src = BLANK_URL;
  }

  /** @return { boolean } */
  isRunning() {
    return this.iframe.src !== BLANK_URL;
  }

  /** Start the game. */
  startGame() {
    if (!this.isRunning()) {
      this.iframe.src = this.gameUrl;
    }
  }

  /** End the game. */
  endGame() {
    if (this.isRunning()) {
      this.iframe.src = BLANK_URL;
    }
  }

  /**
   * @override
   * @param { boolean } shouldStartGame
   *   `true` for instruction to start the game;
   *   `false` to end the game.
   * */
  receive(shouldStartGame) {
    shouldStartGame ? this.startGame() : this.endGame();
  }
}

/** @type { Object.<string, ?GameStatusObserver> } */
const observers = Object.seal({
  [GAMES.AE1]: null,
  [GAMES.AE2]: null,
});

/** @type { Proxy<Object.<string, boolean>> } */
const gameRunningStatusProxy = new Proxy(Object.seal({
  [GAMES.AE1]: false,
  [GAMES.AE2]: false,
}), {
  set: /** @return { boolean } */
    (target, prop, value) => {
      value = Boolean(value);
      return Reflect.set(target, prop, value) &&
        (() => {
          observers[prop]?.receive(value);
          return true;
        })();
    },
});

/**
 * Get game running status.
 * @param { GAMES } game
 * @return { boolean }
 */
export const getGameRunningStatus = (game) => {
  return gameRunningStatusProxy[game];
};

/**
 * Set game running status.
 * @param { GAMES } game
 * @param { boolean } status
 */
export const setGameRunningStatus = (game, status) => {
  gameRunningStatusProxy[game] = status;
};

/**
 * Initialize game status with observers.
 * @param { ?GameStatusObserver } ae1Observer
 * @param { ?GameStatusObserver } ae2Observer
 */
const initGameStatusObservers = (ae1Observer, ae2Observer) => {
  observers[GAMES.AE1] = ae1Observer;
  observers[GAMES.AE2] = ae2Observer;
};

export default initGameStatusObservers;
