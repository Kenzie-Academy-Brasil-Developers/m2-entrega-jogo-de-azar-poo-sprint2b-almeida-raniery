import GameController from "../controllers/GameController.js";

class HUD {
  constructor(canvas) {
    this.canvas = canvas
    this.cont   = canvas.getContext('2d');
    this.hatImg = document.createElement("img");

    this.hatImg.src = "src/img/Hat.png";
    this.hatImg.addEventListener("load", this.updateLives)
  }

  initHud() {
    this.drawBorder();
    this.drawNames();
    this.updateLives();
  }

  drawBorder() {
    this.cont.fillStyle   = "#bb6446";
    this.cont.strokeStyle = "#d69b55";
    this.cont.lineWidth   = 4;
    this.cont.fillRect(0, 0, this.canvas.width, 48);
    this.cont.strokeRect(2, 1, this.canvas.width - 4, 48);
  }

  drawNames() {
    this.cont.font = "8px press2PStart";
    this.cont.fillStyle = "white";

    this.cont.textAlign = "left";
    this.cont.fillText(" Player", 8, 24);

    this.cont.textAlign = "right";
    this.cont.fillText("Peace Pete", 308, 24);
  }

  refresh() {
    this.drawBorder();
    this.drawNames();
    this.updateLives();
  }

  updateLives() {
    for (let i = 0; i < GameController.getPlayerLives(); i++) {
      this.cont.drawImage(this.hatImg, 0, 0, 16, 16, i * 16 + 16, 25, 16, 16);
    }

    for (let i = 0; i < GameController.getEnemyLives(); i++) {
      this.cont.drawImage(this.hatImg, 0, 0, 16, 16, 280 - i * 16 , 25, 16, 16);
    }
  }
}

export default HUD;