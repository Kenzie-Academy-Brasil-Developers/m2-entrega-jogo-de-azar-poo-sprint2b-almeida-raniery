import Game from "../models/Game.js";

class GameController {
  static game = new Game();

  static selectMove(move) {
    this.game.playerCharacter.selectedMove = move;
    this.game.view.hud.selectedMove = move.type;

    if (this.game.timer.intervalId === 0) {
      this.game.harmonica.play();
      this.game.timer.start();
    }
  }

  static getPlayerMove() {
    return this.game.playerCharacter.selectedMove;
  }

  static getEnemyMove() {
    return this.game.currentEnemy.selectedMove;
  }

  static getRoundWinner() {
    return this.game.calculateVictory();
  }

  static getPlayerLives() {
    return this.game.playerCharacter.lives;
  }

  static getEnemyLives() {
    return this.game.currentEnemy.lives;
  }

  static getCharacterGraphics(handle) {
    return {
      player: this.game.playerCharacter.getGraphics(handle),
      enemy: this.game.currentEnemy.getGraphics(handle),
    };
  }

  static getCharacterNames() {
    return {
      enemyName: this.game.currentEnemy.shortName,
      playerName: "Sheriff",
    }
  }

  static showEnemyMove(move) {
    this.game.view.showAction(move, false);
  }

  static nextStage() {
    this.game.nextStage();
  }

  static getUpdatedGraphics() {
    return this.getCharacterGraphics(this.game.playerCharacter.currentState);
  }

  static onTimerFinish() {
    this.game.ricochet.play();
    this.game.view.showResult();
    this.game.timer.reset();
    this.game.status = "Paused";

    setTimeout(() => {
      this.resetStates();
      this.game.view.refresh();
      this.game.song.play();
      if (this.game.status === "Over") {
        this.game.view.init();
      } else {
        this.game.status = "Running"
      }
    }, 2000);
  }

  static onTimerUpdate(time) {
    let drawCallback;

    this.game.updateStates(time / 1000);

    if (time === 1000) {
      drawCallback = this.game.currentEnemy.selectMove();
    }

    this.game.view.countDown(time / 1000);

    if(drawCallback) {
      this.game.view.refresh();
      drawCallback();
    }
  }

  static getStatus() {
    return this.game.status;
  }

  static resetStates() {
    this.game.view.hud.selectedMove = "None";
    this.game.updateStates();
  }

  static newGame() {
    this.game.song.pause()
    this.game.song.currentTime = 0;
    this.game = new Game();
    this.game.initGame();
  }

  static startGame() {
   this.game.restartGame();
  }
}

export default GameController;