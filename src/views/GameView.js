import GameController from "../controllers/GameController.js";
import HUD from "./HUD.js";

class GameView {
  constructor() {
    this.gameCanvas = document.querySelector("canvas");
    this.cont       = this.gameCanvas.getContext("2d");
    this.spritePath = "src/img/Spritesheet.png";
    this.hud        = new HUD(this.gameCanvas);
  }

  createView() {
    const playerImg = document.createElement("img");
    const enemyImg  = document.createElement("img");
    const ratio     = Math.ceil(window.devicePixelRatio);

    const { player: playerIdle, enemy: enemyIdle } = GameController.getCharacterGraphics("idle");

    this.gameCanvas.width = 320 * ratio;
    this.gameCanvas.height = 220 * ratio;

    this.cont.imageSmoothingEnabled = false;
    this.cont.webkitImageSmoothingEnabled = false;

    this.playerImg = playerImg;
    this.enemyImg = enemyImg;

    playerImg.src = this.spritePath;
    enemyImg.src = this.spritePath;

    this.hud.initHud();

    playerImg.addEventListener("load", () => {
      this.drawSprite(playerImg, playerIdle);
    });

    enemyImg.addEventListener("load", () => {
      this.drawSprite(enemyImg, enemyIdle);
    });
  }

  showActions() {
    const playerAction = document.createElement("img");
    const enemyAction = document.createElement("img");
    const resultText = GameController.getRoundWinner();

    const { flipped: leftGraphic } = GameController.getPlayerMove();
    const { graphic: rightGraphic } = GameController.getEnemyMove();

    playerAction.src = this.spritePath;
    enemyAction.src = this.spritePath;

    this.refresh();

    playerAction.addEventListener('load', () => {
      this.drawSprite(playerAction, leftGraphic);
    })
    
    enemyAction.addEventListener('load', () => {
      this.drawSprite(enemyAction, rightGraphic);
    })

    this.cont.font = "16px press2PStart";
    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.fillText(resultText, this.gameCanvas.width / 2 + 8, 190);

    setTimeout(() => {
      GameController.updateStates();
      this.refresh();
    }, 2000);
  }

  countDown(time) {
    const messages = ["","Draw!", "Set", "Ready"]

    this.refresh();

    this.cont.font = "16px press2PStart";
    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.fillText(messages[time], this.gameCanvas.width / 2 + 8, 140);
  }

  refresh() {
    this.cont.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

    const { enemy, player } = GameController.getUpdatedGraphics();

    this.drawSprite(this.playerImg, player);
    this.drawSprite(this.enemyImg, enemy);

    this.hud.refresh();
    this.hud.updateLives();
  }

  drawSprite(img, { sx, sy, x, y, scale }) {
    this.cont.drawImage(
      img,
      sx * 32,
      sy * 32,
      32,
      32,
      x,
      y,
      scale * 32,
      scale * 32
    );
  }
}

export default GameView;