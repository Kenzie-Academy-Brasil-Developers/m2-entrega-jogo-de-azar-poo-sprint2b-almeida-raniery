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
    this.time -= 100;
    console.log(this.time/1000)
    if (this.time <=0) {
      this.time = 0;
      this.finish();
    }
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