import View from "./View.js";

class GameOverView extends View {
  constructor() {
    super();
  }

  init(){
    this.refresh();

    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.font = "16px Press2PStart";
    this.cont.fillText("Game Over!", this.canvas.width / 2 + 8, 96);

    this.cont.font = "8px Press2PStart";
    this.cont.fillText("Start to try again", this.canvas.width / 2 + 8, 128);
    this.cont.fillText("Reset to start over", this.canvas.width / 2 + 8, 148);

  }

  refresh(){
    super.refresh();
  }
}

export default GameOverView