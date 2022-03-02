import View from "./View.js";

class TitleView extends View {
  constructor() {
    super();
  }

  init() {
    super.init();

    this.cont.fillStyle = "white";
    this.cont.textAlign = "center";

    this.cont.font = "32px November";
    this.cont.fillText("Rock, Paper, Duel!", this.canvas.width / 2, 96);

    this.cont.font = "8px Press2PStart";
    this.cont.fillText(
      "Press 'Start' to Begin.",
      this.canvas.width / 2,
      128
    );
  }

  refresh() {
    super.refresh();
  }
}

export default TitleView