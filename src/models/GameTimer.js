import GameController from "../controllers/GameController.js";

class GameTimer{
  constructor(duration) {
    this.duration   = duration;
    this.time       = duration;
    this.intervalId = 0;
  }

  start() {
    this.intervalId = setInterval(this.update.bind(this), 100);
  }

  update() {

    if (this.time % 1000 === 0) {
      GameController.onTimerUpdate(this.time);
    }

    if (this.time <= 0) {
      this.time = 0;
      this.finish();
      return;
    }

    this.time -= 100;
  }

  pause() {}

  finish() {
    clearInterval(this.intervalId);
    GameController.onTimerFinish();
  }

  reset() {
    this.time       = this.duration;
    this.intervalId = 0;
  }
}

export default GameTimer;