import Game from "../models/Game.js";

class GameController {
  static game = new Game();

  static selectMove(move) {
    this.game.playerCharacter.selectedMove = move;

    if (this.game.timer.intervalId === 0) {
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
      playerName: "Player",
    }
  }

  static nextStage() {
    this.game.nextStage();
  }

  static getUpdatedGraphics() {
    return this.getCharacterGraphics(this.game.playerCharacter.currentState);
  }

  static onTimerFinish() {
    this.game.view.showActions();
    this.game.timer.reset();

    setTimeout(() => {
      this.resetStates();
      this.game.view.refresh();
    }, 2000);
  }

  static onTimerUpdate(time) {

    if(time === 1000) {
      this.game.currentEnemy.selectRandomMove();
    }

    this.game.updateStates(time / 1000);
    this.game.view.countDown(time/1000);
    
    console.log(time/1000);
  }

  static resetStates() {
    this.game.updateStates();
  }
}

export default GameController;