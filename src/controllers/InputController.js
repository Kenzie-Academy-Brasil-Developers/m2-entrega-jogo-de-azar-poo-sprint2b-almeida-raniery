import GameController from "./GameController";

class InputController {
  constructor (moveList) {
    this.controls = document.getElementById("controls");
    this.moveList = moveList;

    this.controls.addEventListener("click", this.getMoveInput);
  }

  getMoveInput(event) {
    const moveIndex = Number(event.target.value);

    GameController.selectMove(this.moveList[moveIndex]);
  }
}

export default InputController;