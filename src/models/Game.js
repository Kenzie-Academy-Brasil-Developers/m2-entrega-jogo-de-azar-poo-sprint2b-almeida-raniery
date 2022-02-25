import enemiesDB       from "../enemiesDB.js";
import Enemy           from "./Enemy.js"
import GameTimer       from "./GameTimer.js";
import Player          from "./Player.js";
import InputController from "../controllers/InputController.js";
import GameView        from "../views/GameView.js";

class Game {
    constructor() {
      this.gameTimer       = new GameTimer(10000);
      this.playerCharacter = new Player();
      this.currentEnemy    = new Enemy(enemiesDB[0]);
      this.input           = new InputController(this.playerCharacter.moveList);
      this.view            = new GameView(this);
      this.stageNumber     = 0;
      this.turnNumber      = 0;
    }

    calculateVictory() {
      const playerMove = this.playerCharacter.selectedMove;
      const enemyMove  = this.currentEnemy.selectedMove;
      console.log(playerMove, enemyMove)

      if(enemyMove.type === playerMove.type) {
        return "Draw"
      }

      return playerMove.type === enemyMove.weakness ? "Player" : "Enemy";
    }

    nextStage() {
      this.stageNumber++;
      this.currentEnemy = new Enemy(enemiesDB[this.stageNumber]);
    }
}

export default Game;