import Game            from "../models/Game.js";
import Player          from "../models/Player.js";
import InputController from "./InputController.js";
import GameTimer       from "../models/GameTimer.js";
import GameView        from "../views/GameView.js";

class GameController {
  static game  = new Game();

  static selectMove(move) {
    this.game.playerCharacter.selectedMove = move;
    this.game.currentEnemy.selectRandomMove();
    this.game.view.showActions();
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
}

export default GameController;