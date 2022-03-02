import GameController from "../controllers/GameController.js";
import HUD from "./HUD.js";
import View from "./View.js";

class GameView extends View {
  constructor() {
    super()
    this.spritePath = "src/img/Spritesheet.png";
  }

  init() {
    super.init();
    
    const playerImg    = document.createElement("img");
    const enemyImg     = document.createElement("img");
    const action       = document.createElement("img");
    //const ratio        = Math.ceil(window.devicePixelRatio);

    const { player: playerIdle, enemy: enemyIdle } = GameController.getCharacterGraphics("idle");

    this.playerImg    = playerImg;
    this.enemyImg     = enemyImg;
    this.action       = action;

    playerImg.src    = this.spritePath;
    enemyImg.src     = this.spritePath;
    action.src       = this.spritePath;

    document.fonts.load("8px press2PStart").then(
      () => {
        this.hud = new HUD();
        this.hud.init();
      }
    )

    playerImg.addEventListener("load", () => {
      this.drawSprite(playerImg, playerIdle);
    });

    enemyImg.addEventListener("load", () => {
      this.drawSprite(enemyImg, enemyIdle);
    });
  }

  showResult() {
    const resultText = GameController.getRoundWinner();
    const playerMove = GameController.getPlayerMove();
    const enemyMove  = GameController.getEnemyMove();

    this.refresh();

    this.showAction(playerMove, true);
    this.showAction(enemyMove, false);

    this.cont.font = "16px November";
    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";
    this.cont.scale(this.ratio, this.ratio)

    this.cont.fillText(resultText, this.canvas.width / 2 + 8, 190);
  }

  showAction(move, flipped) {
    const graphic = flipped ? move.flipped : move.graphic;

    this.drawSprite(this.action, graphic);
  }

  countDown(time) {
    const messages = ["","Draw!", "Set", "Ready"]

    this.refresh();

    this.cont.font = "32px November";
    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.fillText(messages[time], this.canvas.width / 2 + 8, 140);
  }

  refresh() {
    super.refresh();

    const { enemy, player } = GameController.getUpdatedGraphics();

    this.drawSprite(this.playerImg, player);
    this.drawSprite(this.enemyImg, enemy);

    this.hud.refresh();
    this.hud.updateLives();
  }
}

export default GameView;