import Game            from "../models/Game.js";
import Player          from "../models/Player.js";
import InputController from "./InputController.js";
import GameTimer       from "../models/GameTimer.js";

class GameController {
  static loadGame() {
    this.playerCharacter = new Player();
    this.gameTimer       = new GameTimer(10000);
    this.game            = new Game(this.playerCharacter, this.gameTimer);
    this.inputController = new InputController(this.playerCharacter.moveList);
  }

  static selectMove(move) {
    this.playerCharacter.selectedMove = move;
  }
}

export default GameController;