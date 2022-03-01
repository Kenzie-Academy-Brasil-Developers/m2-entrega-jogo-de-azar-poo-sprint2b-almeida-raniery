import enemiesDB       from "../enemiesDB.js";
import Enemy           from "./Enemy.js"
import GameTimer       from "./GameTimer.js";
import Player          from "./Player.js";
import InputController from "../controllers/InputController.js";
import GameView        from "../views/GameView.js";
import Character from "./Character.js";

class Game {
    constructor() {
      this.stageNumber     = 0;
      this.turnNumber      = 0;
      this.timer           = new GameTimer(3000);
      this.playerCharacter = new Player();
      this.currentEnemy    = new Enemy(enemiesDB[this.stageNumber]);
      this.input           = new InputController(this.playerCharacter.moveList);
      this.view            = new GameView(this);
    }

    calculateVictory() {
      const playerMove = this.playerCharacter.selectedMove;
      const enemyMove  = this.currentEnemy.selectedMove;
      
      this.turnNumber++;

      if(enemyMove.type === playerMove.type) {
        return "Draw!"
      } else if (playerMove.type === enemyMove.weakness) {
        this.currentEnemy.lives -= 1;
        return "Player Wins!";
      } else {
        this.playerCharacter.lives -=1;
        return `${this.currentEnemy.name} Wins!`;
      }
    }

    nextStage() {
      this.stageNumber++;
      this.currentEnemy = new Enemy(enemiesDB[this.stageNumber]);
    }

    updateStates(timeStamp = 3) {
      this.playerCharacter.currentState = Character.states[timeStamp];
      this.currentEnemy.currentState    = Character.states[timeStamp];
    }
}

export default Game;