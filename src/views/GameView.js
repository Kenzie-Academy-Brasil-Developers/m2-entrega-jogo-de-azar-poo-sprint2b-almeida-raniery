import GameController from "../controllers/GameController.js";

class GameView {
  constructor({playerCharacter, currentEnemy}) {
    this.playerGraphics = playerCharacter.graphics;
    this.enemyGraphics  = currentEnemy.graphics;
    this.display        = document.getElementById("gameDisplay");
  }

  showActions(){
    this.display.innerHTML = '';

    const playerAction = document.createElement("p");
    const enemyAction  = document.createElement("p");
    const result       = document.createElement("p");

    playerAction.innerText = GameController.getPlayerMove().type;
    enemyAction.innerText  = GameController.getEnemyMove().type;
    result.innerText       = `${GameController.getRoundWinner()} Wins!`;

    this.display.append(playerAction, enemyAction, result); 
  }
}

export default GameView;