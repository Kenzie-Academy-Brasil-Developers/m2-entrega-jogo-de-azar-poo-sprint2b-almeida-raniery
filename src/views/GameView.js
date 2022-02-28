import GameController from "../controllers/GameController.js";

class GameView {
  constructor() {
    this.gameCanvas     = document.querySelector('canvas');
    this.cont           = this.gameCanvas.getContext('2d');
    this.spritePath     = "src/img/Spritesheet.png";
  }

  createView() {
    const playerImg = document.createElement("img");
    const enemyImg = document.createElement("img");

    const { player: playerIdle, enemy: enemyIdle } = GameController.getCharacterGraphics("idle");

    this.gameCanvas.width  = 320;
    this.gameCanvas.height = 220;

    this.cont.imageSmoothingEnabled       = false;
    this.cont.webkitImageSmoothingEnabled = false;

    playerImg.src = this.spritePath;
    enemyImg.src  = this.spritePath;

    playerImg.addEventListener("load", () => {
      this.drawSprite(playerImg, playerIdle, 12, 124, 3);
    });

    enemyImg.addEventListener("load", () => {
      this.drawSprite(enemyImg, enemyIdle, 230, 142, 2);
    });
  }

  showActions() {
    const playerAction  = document.createElement("img");
    const enemyAction   = document.createElement("img");
    const resultText    = GameController.getRoundWinner();

    const {flipped: playerGraphic} = GameController.getPlayerMove();
    const {graphic: enemyGraphic } = GameController.getEnemyMove();

    playerAction.src = this.spritePath;
    enemyAction.src  = this.spritePath;

    this.cont.clearRect(40,42,42,32);

    this.drawSprite(playerAction, playerGraphic, 106, 92, 2);
    this.drawSprite(enemyAction, enemyGraphic, 168, 100, 2);

    this.cont.fillText(resultText, 120, 190)
  }

  drawSprite(img, {sx, sy}, x, y, scale) {
    this.cont.drawImage(img, sx * 32, sy * 32, 32, 32, x, y, scale * 32, scale * 32);
  }
}

export default GameView;