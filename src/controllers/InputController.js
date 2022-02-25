import GameController from "./GameController.js";

class InputController {
  constructor (moveList) {
    this.controls = document.getElementById("controls");
    this.moveList = moveList;

    this.controls.addEventListener("click", this.getMoveInput.bind(this));
  }

  getMoveInput(event) {
    const moveIndex = Number(event.target.value);

    GameController.selectMove(this.moveList[moveIndex]);
  }
}

export default InputController;