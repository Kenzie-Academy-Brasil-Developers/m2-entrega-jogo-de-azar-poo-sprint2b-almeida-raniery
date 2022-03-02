import View from "./View.js";

class EndGameView extends View {
  constructor() {
    super();
  }

  init() {
    this.refresh();

    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.font = "16px Press2PStart";
    this.cont.fillText("You Won!", this.canvas.width / 2 + 8, 96);

    this.cont.font = "8px Press2PStart";
    this.cont.fillText("You defeated Lucky Lucy's Gang.", this.canvas.width / 2 + 8, 128);
    this.cont.fillText("The town is safe once again!", this.canvas.width / 2 + 8, 148);
  }

  refresh() {
    super.refresh();
  }
}

export default EndGameView