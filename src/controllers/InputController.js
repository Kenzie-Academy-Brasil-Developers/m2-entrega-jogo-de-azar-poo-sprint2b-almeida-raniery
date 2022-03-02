import GameController from "./GameController.js";

class InputController {
  constructor (moveList) {
    this.controls        = document.getElementById("controls");
    this.machineControls = document.getElementById("machine-controls");
    this.moveList        = moveList;

    this.controls.addEventListener("click", this.getMoveInput.bind(this));
    this.machineControls.addEventListener("click", this.getMachineInput.bind(this));
  }

  getMoveInput(event) {
    const closestButton = event.target.closest('button');

    if (!closestButton || GameController.getStatus() !== "Running"){
      return;
    }

    const moveIndex = Number(closestButton.value);

    GameController.selectMove(this.moveList[moveIndex]);
  }

  getMachineInput(event) {
    const closestButton = event.target.closest("button");
    console.log(closestButton);

    if(!closestButton){
      return;
    }

    if(closestButton.value === "start") {
      if (GameController.getStatus() === "Title" || GameController.getStatus() === "Over"){
        GameController.startGame();
      }
    } else if (closestButton.value === "reset") {
      GameController.newGame();
    }
  }
}

export default InputController;