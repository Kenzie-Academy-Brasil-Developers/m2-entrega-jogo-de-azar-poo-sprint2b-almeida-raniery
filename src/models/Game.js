class Game {
    constructor(playerCharacter, timerObject) {
      this.playerCharacter = playerCharacter;
      this.gameTimer       = timerObject;
      this.currentEnemy    = new Enemy
      this.stageNumber     = 0;
      this.turnNumber      = 0;
    }

    calculateVictory() {
      const playerMove = this.playerCharacter.selectedMove;
      const enemyMove  = this.currentEnemy.selectedMove;

      if(enemyMove.type === playerMove.type) {
        return "Draw"
      }

      return playerMove.type === enemyMove.weakness ? "Player" : "Enemy";
    }

    nextStage() {
    }
}

export default Game;