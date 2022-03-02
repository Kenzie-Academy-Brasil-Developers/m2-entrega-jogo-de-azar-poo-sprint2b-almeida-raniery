import GameController from "../controllers/GameController.js";
import View from "./View.js";

class HUD extends View {
  constructor() {
    super();

    this.hatImg          = document.createElement("img");
    this.moveImg         = document.createElement("img");
    this.hatGraphic      = {x: 0, y: 26, scale: 1, sx: 0, sy: 0};
    this.selectedMove    = "None"

    this.moveGraphics = {
      None: {x: 0, y: 0, scale: 0, sx: 0, sy: 0},
      Rock: { x: this.canvas.width / 2 - 12, y: 14, scale: 1, sx: 1, sy: 6 },
      Paper: {x: this.canvas.width/2 - 14, y: 14, scale: 1, sx: 2, sy: 6},
      Scissors: {x: this.canvas.width/2 - 12, y: 14, scale: 1, sx: 3, sy: 6},
    };

    this.hatImg.src  = "src/img/Hat.png";
    this.moveImg.src = "src/img/Spritesheet.png"
  }

  init() {
    this.drawBorder();
    this.drawNames();

    this.hatImg.addEventListener("load", () => {
      this.updateLives();
    });

    this.moveImg.addEventListener("load", () => {
      console.log(this.moveGraphics.Rock);
      this.drawSprite(this.moveImg, this.moveGraphics[this.selectedMove]);
    })
  }

  drawBorder() {
    this.cont.fillStyle   = "#bb6446";
    this.cont.strokeStyle = "gold";
    this.cont.lineWidth   = 2;
    this.cont.fillRect(0, 0, this.canvas.width, 48);
    this.cont.strokeRect(1, 1, this.canvas.width - 2, 48);
    this.cont.strokeRect(this.canvas.width/2 - 16, 20, 28, 24);
    this.drawSprite(this.moveImg, this.moveGraphics[this.selectedMove]);
  }

  drawNames() {
    const {playerName, enemyName} = GameController.getCharacterNames();

    this.cont.font = "8px press2PStart";
    this.cont.fillStyle = "white";

    this.cont.textAlign = "left";
    this.cont.fillText(playerName, 32, 24);

    this.cont.textAlign = "center";
    this.cont.fillText(enemyName, 256, 24);
    this.cont.fillText(this.selectedMove, this.canvas.width / 2 - 2, 18);
  }

  refresh() {
    this.drawBorder();
    this.drawNames();
    this.updateLives();
  }

  updateLives() {
    for (let i = 0; i < GameController.getPlayerLives(); i++) {
      this.hatGraphic.x = i * 16 + 32
      this.drawSprite(this.hatImg, this.hatGraphic, 16);
    }

    for (let i = 0; i < GameController.getEnemyLives(); i++) {
      this.hatGraphic.x = 264 - i * 16
      this.drawSprite(this.hatImg, this.hatGraphic, 16);
    }
  }
}

export default HUD;